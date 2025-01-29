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
    }

});

Usuario.index({email: 1});

module.exports = Usuario;