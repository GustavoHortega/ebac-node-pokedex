const mongoose = require('mongoose');

const PokemonSchema = require('./pokemon');

const Pokemon = require = mongoose.model('Pokemon', PokemonSchema);

const connect = () => {
    mongoose.connect('mongodb://localhost27017/pokedex');
};

module.exports = {
    Pokemon,
    connect
}