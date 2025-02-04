const passport = require('passport');
const crypto = require('crypto');
const axios = require('axios');
const  GitHubStrategy = require('passport-github2');

const { Usuario } = require('../../models');

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CLIENT_URL,
    scope: ['user:email'],
    state: true

    
}, async(_accessToken, _refreshToken, perfil, done) => {
    const response = await axios.get('https://api.github.com/user/emails', {

        
        headers:{
            'Authorization': `Bearer ${_accessToken}`
        }
    });

    
    
    
    try {
        let usuario;
    
        const emails = response.data;
        let usuarioEmail = null;
    
        for (let email of emails) {
            if (email.primary && email.visibility === 'public') {
                usuarioEmail = email.email;
                break;
            }
        };
        if(!usuarioEmail) {
            return done(new Error('não foi possível obter um e-mail público'), null);
        };

        usuario = await Usuario.findOneAndUpdate({ email: usuarioEmail}, {
            gitHubUsuarioID: perfil.id
        });

        if(!usuario) {
            usuario = await Usuario.create({
                email: usuarioEmail,
                gitHubUsuarioID: perfil.id,
                nome: perfil.displayName,
                senha: (await crypto.randomBytes(48).toString('hex'))
            });
        };

        done(null, usuario);
        
    } catch (error) {
        done(error, null);

    }
}


))