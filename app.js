const express = require('express');
const path = require('path');

const { connect } = require('./models');

const pokemonsRouter = require('./routes/pokemons');
const expressEjsLayouts = require('express-ejs-layouts');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressEjsLayouts);
app.use(express.static('public'));

//rotas declaradas
app.use('/pokemons', pokemonsRouter);

const port = 3000;

app.listen(3000, ()=>{
    connect();

    console.log(`server listening on port ${port}`);
})