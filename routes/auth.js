const express = require('express');
const passport = require('passport');

const { geraToken } = require('../services');
const { checaAutenticado, checaNaoAutenticado } = require('./middlewares/checa-autenticacao')

const router = express.Router();

router.get('/', checaNaoAutenticado, (req, res) => {
    res.render('paginas/login', { error: req.query.erroNoLogin });

});

router.get('/logout', checaAutenticado, async (req, res, next) => {
    req.logOut(req.user, (err) => {
        if(!err){
            res.redirect('/auth');
        } else {
            next(err);
        }
    });
});


router.post('/', (req, res, next) => {
    passport.authenticate('local', (err, usuario) => {
        if (err) {
            return next(err);
        }

        if (!usuario) {
            return res.redirect('/auth?erroNoLogin=true');
        }

        req.logIn(usuario, (err) => {
            if (err) {
                return next(err);
            }

            const token = geraToken(usuario);

            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 24 * 60 * 60 * 1000
            });

            return res.redirect('/');
        });
    })(req, res, next);
});


//rotas google oauth2
router.get('/google', checaNaoAutenticado,
    passport.authenticate('google')
);


router.get('/oauth2/redirect/google',
    checaNaoAutenticado,
    passport.authenticate('google', {
        failureRedirect: '/auth',
        failureMessage: true
    }),
    (req, res) => {
        const token = geraToken(req.user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.redirect('/');
    }
);


//rotas github oauth2
router.get('/github', checaNaoAutenticado,
    passport.authenticate('github')
);


router.get('/oauth2/redirect/github',
    checaNaoAutenticado,
    passport.authenticate('github', {
        failureRedirect: '/auth',
        failureMessage: true
    }),
    (req, res) => {
        const token = geraToken(req.user);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 24 * 60 * 60 * 1000
        });

        res.redirect('/');
    }
);




module.exports = router;