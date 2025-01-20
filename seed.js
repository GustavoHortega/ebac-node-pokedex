//PARA TESTES - POPULA O BANCO COM 10 POKEMONS
const mongoose = require('mongoose');

const { connect, Pokemon } = require('./models');

const populaBancoDeDados = async () => {
    connect();

    await Pokemon.insertMany([
        {
            id: 7,
            nome: 'squirtle',
            altura: 5,
            peso: 90,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
            ataques: 'torrent, rain-dish',
            estatisticas: {
                hp: 44,
                attack: 48,
                defense: 65,
                'especial-attack': 50,
                'especial-defense': 64,
                speed:43
            }
        },

        {
            id: 544,
            nome: 'whirlipede',
            altura: 12,
            peso: 585,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/544.png',
            ataques: 'poison-point, swarm, speed-boost',
            estatisticas: {
                hp: 40,
                attack: 55,
                defense: 99,
                'special-attack': 40,
                'special-defense': 79,
                speed: 47
            }
        },

        {
            id: 533,
            nome: 'gurdurr',
            altura: 12,
            peso: 400,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png',
            ataques: 'guts, sheer-force, iron-fist',
            estatisticas: {
                hp: 85,
                attack: 105,
                defense: 85,
                'special-attack': 40,
                'special-defense': 50,
                speed: 40
            }
        },

        {
            
            id: 669,
            nome: 'flabebe',
            altura: 1,
            peso: 1,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/669.png',
            ataques: 'flower-veil, symbiosis',
            estatisticas: {
                hp: 44,
                attack: 38,
                defense: 39,
                'special-attack': 61,
                'special-defense': 79,
                speed: 42
            }
              
            
        },

        {
            
            id: 435,
            nome: 'skuntank',
            altura: 10,
            peso: 380,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/435.png',
            ataques: 'stench, aftermath, keen-eye',
            estatisticas: {
                hp: 103,
                attack: 93,
                defense: 67,
                'special-attack': 71,
                'special-defense': 61,
                speed: 84
            },
              
        },

        {
            
            id: 377,
            nome: 'regirock',
            altura: 17,
            peso: 2300,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/377.png',
            ataques: 'clear-body, sturdy',
            estatisticas: {
                hp: 80,
                attack: 100,
                defense: 200,
                'special-attack': 50,
                'special-defense': 100,
                speed: 50
            }
        },

        {
            
            id: 134,
            nome: 'vaporeon',
            altura: 10,
            peso: 290,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/134.png',
            ataques: 'water-absorb, hydration',
            estatisticas: {
                hp: 130,
                attack: 65,
                defense: 60,
                'special-attack': 110,
                'special-defense': 95,
                speed: 65
            }
        },

        {

            id: 888,
            nome: 'zacian',
            altura: 28,
            peso: 1100,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/888.png',
            ataques: 'intrepid-sword',
            estatisticas: {
                hp: 92,
                attack: 120,
                defense: 115,
                'special-attack': 80,
                'special-defense': 115,
                speed: 138
            }
        },

        {

            id: 306,
            nome: 'aggron',
            altura: 21,
            peso: 3600,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/306.png',
            ataques: 'sturdy, rock-head, heavy-metal',
            estatisticas: {
                hp: 70,
                attack: 110,
                defense: 180,
                'special-attack': 60,
                'special-defense': 60,
                speed: 50
            }
        },

        {

            id: 288,
            nome: 'vigoroth',
            altura: 14,
            peso: 465,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/288.png',
            ataques: 'vital-spirit',
            estatisticas: {
                hp: 80,
                attack: 80,
                defense: 80,
                'special-attack': 55,
                'special-defense': 55,
                speed: 90
            }
        },

        {

            id: 526,
            nome: 'gigalith',
            altura: 17,
            peso: 2600,
            imagem: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/526.png',
            ataques: 'sturdy, sand-stream, sand-force',
            estatisticas: {
                hp: 85,
                attack: 135,
                defense: 130,
                'special-attack': 60,
                'special-defense': 80,
                speed: 25
            }
        }


    ]);

    await mongoose.disconnect();
}

populaBancoDeDados();