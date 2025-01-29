const express = require('express');

const router = express.Router();

const { Pokemon } = require('../../models');


// CRUD - CREATE
router.post('/', async (req, res) => {
    try {
        const pokemon = await Pokemon.create({
            ...req.body,
            ...{
                capturadoPor: req.usuario._id
            }

        });
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

        }

        options.capturadoPor = req.usuario._id;
        
        //Realizado o ajuste dos filtros que estavam com a lógica incorreta
        if(filtros.pesoMinimo){
            options.peso = {
                $gte: filtros.pesoMinimo,
            };

        }
        
        if(filtros.pesoMaximo){
            options.peso = {
                $$lte: filtros.pesoMaximo,
            };
        };

        if(filtros.alturaMinima){
            options.altura = {
                $gte: filtros.alturaMinima,
            };
        };

        if(filtros.alturaMaxima){
            options.altura = {
                $lte: filtros.alturaMaxima,
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
router.get('/:_id', async (req, res) => {
    try {
        const pokemon = await Pokemon.findOne({ _id: req.params._id });

        // Verifica se o Pokémon foi encontrado
        if (!pokemon) {
            return res.status(404).json({
                sucesso: false,
                erro: "Pokémon não encontrado!",
            });
        }

        // Se o Pokémon for encontrado, retorna com sucesso
        res.json({
            sucesso: true,
            pokemon: pokemon,
        });
    } catch (e) {
        // Caso ocorra um erro na consulta ao banco de dados
        res.status(500).json({
            sucesso: false,
            erro: "Erro interno do servidor!",
        });
    }
});


//CRUD - UPDATE (PATCH - faz o update somente do atributo indicado sem a necessidade de passar todos so parametros do pokemon):)
router.patch('/:id', async (req, res) =>{
    try {
        const pokemon = await Pokemon.findOne({
            _id: req.params.id,
            capturadoPor: req.usuario._id
            
        });

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
router.delete('/:_id', async (req, res) =>{
    try {
        const pokemon = await Pokemon.findOne({
            _id: req.params._id,
            capturadoPor: req.usuario._id
        });

        await Pokemon.deleteOne(pokemon._id); // realizado correção - agora a exclusão acontece pelo _ID de forma que se não existir acusa o erro

        res.json({
            sucesso: true,
            pokemomn: pokemon,
            mensagem: "pokemon excluido!"
        });
        
    } catch (e) {
        res.status(500).json({
            sucesso: false,
            erro: "Pokemon não existe",
        });
    }
})


module.exports = router;