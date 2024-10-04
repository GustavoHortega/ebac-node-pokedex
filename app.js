const express = require('express');
const { connect } = require('./models');
const port = 3000;
const pokemonsRouter = require('./routes/pokemons');

const app = express();


//rotas declaradas
app.use('/pokemons', pokemonsRouter);

app.listen(3000, ()=>{
    connect();

    console.log(`server listening on port ${port}`);
})