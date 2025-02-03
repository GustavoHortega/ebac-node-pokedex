const dotenv = require('dotenv').config();

const express = require('express');                         //express import
const passport = require('passport');                       //passport import
const session = require('express-session');                 //session import
const expressEjsLayouts = require('express-ejs-layouts');   // EJS-Layouts import
const path = require('path');                               //path import

const app = express();

//consfigurando leitura de corpo
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Importa conexão
const { connect } = require('./models');

//Erros HTTP
const createErro = require('http-errors');

require('./routes/auth/');

//Importa routers
const batalhaRouter = require('./routes/batalha');
const pokemonsRouter = require('./routes/pokemons');
const autenticacaoRouter = require('./routes/auth');
const homeRouter = require('./routes/home');
const apiRouter = require('./routes/api');

//importa o middlleware
const { checaAutenticado } = require('./routes/middlewares/checa-autenticacao');

//config autenticação (passport e express-session)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//EJS e Layouts
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

//Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//rotas declaradas
app.use('/auth', autenticacaoRouter);
app.use('/pokemons', checaAutenticado, pokemonsRouter);
app.use('/batalha', checaAutenticado, batalhaRouter);
app.use('/', checaAutenticado, homeRouter);

//rotas api
app.use('/api', apiRouter);

//Erros
app.use((_req, _res, next) => {
    next(createErro(404)); //Not Found
});

app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    res.render('paginas/erro', {
        mensagem: err.message,
        erro: err,
    });
});

//Sobe a aplicação na porta selecionada.
const port = process.env.PORTA_APLICACAO;

app.listen(3000, ()=>{
    connect();

    console.log(`server listening on port ${port}`);
})