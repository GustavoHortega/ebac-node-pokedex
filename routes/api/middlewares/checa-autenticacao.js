const jwt = require('jsonwebtoken');

const { Usuario } = require('../../../models');

const checaAutenticacao = async (req, res, next) => {
    try {
        const jwtUsuario = req.headers.authorization.replace('Bearer ', ''); //É uma boa prática fazer autenticação jwt via headers.
        const email = (await jwt.verify(jwtUsuario, process.env.SEGREDO_JWT)).email

        const usuario = await Usuario.findOne({ email: email });

        if (!usuario) {
            throw 'Usuário Não encontrado!';
        };

        req.usuario = usuario;

        next();

    } catch (error) {
        res.status(401).json({
            sucesso: false,
            erro: 'Faça login para acessar essa rota',
            error: error,
        })

    }

}

module.exports = {
    checaAutenticacao,
    
}