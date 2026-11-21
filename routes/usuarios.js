const express = require('express');
const { Usuario } = require('../models');
const bcrypt = require('bcrypt')

const router = express.Router();

router.get('/cadastro', (req, res) => {
    res.render('paginas/cadastro', {error: false});
});

router.post('/cadastro', async (req, res) => {

    try {
        const usuario = req.body;

        if (await Usuario.findOne({email: usuario.email})) {
            throw new Error('Usuário já existe')
        }

        await Usuario.create({
            email: usuario.email,
            nome: usuario.nome,
            senha: await bcrypt.hash(usuario.senha, 10)
        });
    
        res.redirect('/auth');
        
    } catch (err) {
        console.error(err); // Mostra o erro técnico só para você no terminal
        return res.status(500).render('paginas/cadastro', { error: err.message });
    }

});

module.exports = router;