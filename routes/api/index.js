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

const router = express.Router();

//Declara rotas
router.use('/captura',cors(corsOptions), capturaRouter);
router.use('/status', cors(corsOptions), statusRouter);

module.exports = router;