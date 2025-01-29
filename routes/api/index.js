const express = require('express');

const cors = require('cors');

//config cors
const corsOptions = {
    origin: '*', //qualquer endereço pode fazer requisições pra nossa api
    optionSuccessStatus: 200,

}

//Router import
const capturaRouter = require('./captura');
const statusRouter = require('./status');
const pokemonsRouter = require('./pokemons');
const autenticacaoRouter = require('./autenticacao');

//Middlleware import
const { checaAutenticacao } = require('./middlewares/checa-autenticacao');


const router = express.Router();

router.use(express.json());

//Declara rotas
router.use('/captura',cors(corsOptions), checaAutenticacao, capturaRouter);
router.use('/pokemons', cors(corsOptions), checaAutenticacao, pokemonsRouter);
router.use('/status', cors(corsOptions), statusRouter);
router.use('/autenticacao', cors(corsOptions), autenticacaoRouter);

module.exports = router;