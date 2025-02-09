const { Schema } = require('mongoose');

const Usuario = new Schema({
    nome:{
        type: String,
        required: true,
        min: 4
    },
    email:{
        type: String,
        required: true,
        min: 4,
        unique: true, //Prop. de unicidade.
        validator: function(v) {
            return v.match('@');
        },
        message: props => `${props.value} não é um e-mail válido`
    },
    senha:{
        type: String,
        required: true
    },
    googleUsuarioID:{
        type: String,
        required: false
    },
    gitHubUsuarioID:{
        type: String,
        required: false
    }

});

Usuario.index({email: 1});

module.exports = Usuario;