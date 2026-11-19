
const jwt = require('jsonwebtoken');

const geraToken = (usuario) => {
    return jwt.sign(
        { email: usuario.email },
        process.env.SEGREDO_JWT,
        { expiresIn: '1d' }
    );
};

module.exports = geraToken;