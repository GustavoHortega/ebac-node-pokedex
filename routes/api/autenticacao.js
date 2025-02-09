const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { Usuario } = require('../../models');

const router = express.Router();

router.post('/login', async (req, res) =>{
    try {
        const usuario = await Usuario.findOne({ email: req.body.email}); //FindOne retona um usuário vazio no caso de não achar um.

        const senhaEstaCorreta = await bcrypt.compare(req.body.senha, usuario?.senha || '');

        if(senhaEstaCorreta){
            res.json({
                sucesso: true,
                jwt: jwt.sign({
                   email: usuario.email, 
                }, process.env.SEGREDO_JWT)
            })
        }else {
            res.status(401).json({
                sucesso: false,
                erro: "Email ou Senha inválidos"
            })
        }

    } catch (error) {
        res.status(500).json({
            sucesso: false,
            erro: error
        })
    }



});

module.exports = router;