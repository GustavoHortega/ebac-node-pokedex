
const express = require('express');

const router = express.Router();

const middleware = (req, res, next) =>{
    console.log("Tenho acesso a toda req", req);

    next();
}

router.get('/', middleware, (req,res)=>{
    res.json({
        status:"funcionando",
    })
});

module.exports = router;