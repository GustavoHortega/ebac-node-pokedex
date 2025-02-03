const express = require('express');

const { Pokemon } = require('../models')

const router = express.Router();

//Trás a view pokemons e timestamp de cada pokemon.
router.get('/', async (__,res)=> {
    const pokemons = await Pokemon.find();
    pokemons.forEach(pokemon =>{
        const dataIso = pokemon._id.getTimestamp().toISOString();
        const dataInfo = dataIso.split('T')[0];
        dataEmPedacos = dataInfo.split('-');

        pokemon.capturadoEm = `${dataEmPedacos[2]}/${dataEmPedacos[1]}/${dataEmPedacos[0]}`
    });

    res.render('paginas/pokemons/index', {
        pokemons,
    });
});

//Trás a view de informações de um pokemon e retorna um erro caso o pokemon não seja encontrado em nosso banco.
router.get('/:id', async (req, res) => {
    try{
    const pokemon = await Pokemon.findOne({ _id: req.params.id })
        res.render('paginas/pokemons/show', {
            pokemon,
            message: req.query.message,
        })
    }catch(e) {
        res.status(404).render('paginas/erro', {
            mensagem: "Pokemon não encontrado!!",
            erro: {},
        })
    }
});
module.exports = router;