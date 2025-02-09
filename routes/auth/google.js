const passport = require('passport');
const crypto = require('crypto');
const { OAuth2Strategy } = require('passport-google-oauth');

const { Usuario } = require('../../models');

passport.use(new OAuth2Strategy({
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_OAUTH_REDIRECT_URI,
    scope: ['profile', 'email'],
    state: true,

}, async(_accessToken, _refreshToken, perfil, done) => {
    let usuario;

    const usuarioEmail = perfil.emails[0].value;

    try {
        usuario = await Usuario.findOneAndUpdate({ email: usuarioEmail}, {
            googleUsuarioID: perfil.id
        });

        if(!usuario) {
            usuario = await Usuario.create({
                email: usuarioEmail,
                googleUsuarioID: perfil.id,
                nome: perfil.displayName,
                senha: (await crypto.randomBytes(48).toString('hex'))
            });
        };

        done(null, usuario);
        
    } catch (error) {
        done(error, null);
    }

}));
