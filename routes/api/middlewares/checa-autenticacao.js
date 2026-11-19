
const jwt = require('jsonwebtoken');

const { Usuario } = require('../../../models');

const checaAutenticacao = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;

        const token = req.cookies?.token ||
            (authorization?.startsWith('Bearer ')
                ? authorization.slice(7)
                : null);

        if (!token) {
            return res.status(401).json({
                sucesso: false,
                erro: 'Token de autenticação não informado.'
            });
        }

        const payload = jwt.verify(token, process.env.SEGREDO_JWT);

        const usuario = await Usuario.findOne({
            email: payload.email
        });

        if (!usuario) {
            return res.status(401).json({
                sucesso: false,
                erro: 'Usuário não encontrado.'
            });
        }

        req.usuario = usuario;

        next();

    } catch (error) {
        return res.status(401).json({
            sucesso: false,
            erro: 'Faça login para acessar essa rota.'
        });
    }
};

module.exports = {
    checaAutenticacao
};
