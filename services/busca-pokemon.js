const axios = require('axios');

const buscaInfoPokemon = (pokeId) => {
    return new Promise( async (resolve, reject) => {
        const url = process.env.API_EXTERNA_URL + pokeId;
        try{
        const resultado = await axios.get(url)
            const data = resultado.data;

            const id = data.id;
            const nome = data.name;
            const altura = data.height;
            const peso = data.weight;
            const imagem = data.sprites.other['official-artwork'].front_default;
            const ataques = data.abilities.map(a => a.ability.name).join(', ');
            const jogos = data.game_indices.map(a => a.version.name).join(' ').split(' '); //console.log(jogos);


            const estatisticas = {};

            data.stats.forEach((estatistica) => {
                estatisticas[estatistica.stat.name] = estatistica.base_stat;
            });
            
            resolve({
                id,
                nome,
                altura,
                peso,
                imagem,
                ataques,
                estatisticas,
                jogos,
            })

        }catch(e){
            
            reject(e);

        }       
    
    });
}
module.exports = buscaInfoPokemon;