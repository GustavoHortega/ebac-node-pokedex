const express = require('express');
const path = require('path');

const { connect } = require('./models');

const batalhaRouter = require('./routes/batalha');
const pokemonsRouter = require('./routes/pokemons');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

//EJS e Layouts
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

//Arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

//rotas declaradas
app.use('/pokemons', pokemonsRouter);
app.use('/batalha', batalhaRouter);

const port = 3000;

app.listen(3000, ()=>{
    connect();

    console.log(`server listening on port ${port}`);
})