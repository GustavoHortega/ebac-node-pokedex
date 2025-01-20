const dotenv = require('dotenv').config();

const express = require('express'); //express import
const expressEjsLayouts = require('express-ejs-layouts'); // EJS-Layouts import
const path = require('path'); //path import

const app = express(); 

//Importa conexão
const { connect } = require('./models');

//Erros HTTP
const createErro = require('http-errors');

//Importa routers
const batalhaRouter = require('./routes/batalha');
const pokemonsRouter = require('./routes/pokemons');
const apiRouter = require('./routes/api');

//EJS e Layouts
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

//Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//rotas declaradas
app.use('/pokemons', pokemonsRouter);
app.use('/batalha', batalhaRouter);

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