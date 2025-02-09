const { Schema } = require('mongoose');

const Pokemon = new Schema({
    id:{
        type: Number,
        required: true
    },
    nome:{
        type: String,
        required: true
    },
    altura:{
        type: Number,
        required: true,
        min: 0
    },
    peso:{
        type: Number,
        required: true,
        min: 0
    },
    imagem:{
        type: String,
        required: true,
        validate:{
            validator: (valor) => {
                return valor && valor.startsWith('http' || 'https')
            },
            message: () => "A imagem deve ser uma URL ABSOLUTA"
        }
    },
    ataques: {
        type: String,
        required: true
    },
    estatisticas: {
        type: Object,
        required: true
    },
    capturadoPor:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    jogos:{
        type: Object,
        required: false
    }

});

Pokemon.index({capturadoPor: 1}); // transforma o campo selecionado em um index para o servidor.

module.exports = Pokemon;