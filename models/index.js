const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon');
const UsuarioSchema = require('./usuario');

const Usuario = require = mongoose.model('Usuario', UsuarioSchema);
const Pokemon = require = mongoose.model('Pokemon', PokemonSchema);

const connect = () => {
    mongoose.connect(process.env.MONGO_URL);
};

module.exports = {
    Pokemon,
    Usuario,
    connect
}