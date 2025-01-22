const express = require('express');

const cors = require('cors');

//config cors
const corsOptions = {
    origin: '*', //qualquer endereço pode fazer requisições pra nossa api
    optionSuccessStatus: 200,

}

//Router imports
const capturaRouter = require('./captura');
const statusRouter = require('./status');
const pokemonsRouter = require('./pokemons');


const router = express.Router();

router.use(express.json());

//Declara rotas
router.use('/captura',cors(corsOptions), capturaRouter);
router.use('/status', cors(corsOptions), statusRouter);
router.use('/pokemons', cors(corsOptions), pokemonsRouter);

module.exports = router;