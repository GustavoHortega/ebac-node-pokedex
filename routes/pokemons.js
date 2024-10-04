const express = require('express');

const Pokemon = require('../models')

const router = express.Router();

router.get('/', (__,res)=> {
    Pokemon.find().then(pokemons =>{
        res.render('paginas/pokemons/index', {
            pokemons: pokemons
        })
    })
});

module.exports = router;