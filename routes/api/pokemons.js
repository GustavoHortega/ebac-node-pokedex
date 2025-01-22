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

//CRUD - READ
router.get('/:id', async (req, res) =>{
    try {
        const pokemon = await Pokemon.findOne({_id: req.params.id});
        res.json({
            sucesso: true,
            pokemon: pokemon,
        })
    } catch (e) {
        res.status(404).json({
            sucesso: false,
            erro: "pokemon não encontrado!",
        })
        
    }
});

//CRUD - UPDATE (PATCH - faz o update somente do atributo indicado sem a necessidade de passar todos so parametros do pokemon):)
router.patch('/:id', async (req, res) =>{
    try {
        const pokemon = await Pokemon.findOne({_id: req.params.id});

        Object.keys(req.body).forEach((atributo) => {
            pokemon[atributo] = req.body[atributo];
        });

        await pokemon.save();

        res.json({
            sucesso: true,
            pokemon, pokemon,
        });

    } catch (e) {
        res.status(422).json({
            sucesso: false,
            erro: e,
        });
    }
});

//CRUD - DELETE
router.delete('/:id', async (req, res) =>{
    try {
        const pokemon = await Pokemon.findOne( {_id: req.params._id});

        await Pokemon.deleteOne(pokemon);

        res.json({
            sucesso: true,
            pokemomn: pokemon,
        });
        
    } catch (e) {
        res.status(500).json({
            sucesso: false,
            erro: e,
        });
    }
})


module.exports = router;