const express = require('express');

const router = express.Router();

const { Pokemon } = require('../../models');


// CRUD - CREATE
router.post('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.create(req.body);
        res.status(201).json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        })
    }
});

//CRUD - READ
router.get('/', async (req, res) =>{
    try {

        //Filtro de nome
        const filtros = req.query;
        const options = {};

        if (filtros.nomeComecaCom){
            options.nome = {
                $regex: filtros.nomeComecaCom + '.*', //REGEX
            };
        };

        const pokemons = await Pokemon.find(options);
        res.json({
            sucesso: true,
            pokemons: pokemons,
        });
    } catch (e) {
        res.status(500).json({
            sucesso: false,
            erro: (e, "erro interno no servidor"),
        });
    }
});

module.exports = router;