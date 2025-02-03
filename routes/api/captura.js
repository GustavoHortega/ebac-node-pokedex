const express = require('express');
const buscaInfoPokemon = require('../../services/busca-pokemon');

const { Pokemon } = require('../../models')

const router = express.Router();

//Grava o pokemon capturado no banco de dados a partir da busca feita no serviço "buscaPokemon.js"
router.post('/:id', async (req, res) => {
    try{
       const pokemon = await buscaInfoPokemon(req.params.id);

        const pokemonFoiCapturado = Math.random() <= 0.7;

        if(pokemonFoiCapturado) {
            try{
                const pokemonCapturado =  await Pokemon.create({
                    ...pokemon,
                    ...{
                        capturadoPor: req.usuario._id // Identifica quem capturou o pokemon
                    }
                });
                
                res.json({
                    capturado: true,
                    id: pokemonCapturado._id,
                });

            }catch(e){ 
                res.status(500).json({ erro: e})
            };
        }else{
            res.render('paginas/pokemons/index', {
                pokemons,
            });
        }

    }catch(e){
    
        res.status(404).json({ erro: "Pokemon não encontrado :(" });
    
    }
});

module.exports = router;