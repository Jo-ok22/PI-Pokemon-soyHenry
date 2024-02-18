// const axios = require('axios');

// const getPokemons = async (req, res) => {
//     try {
//         const { data } = await axios('https://pokeapi.co/api/v2/pokemon/?limit=40')
//         if (!data.results || data.results.length === 0) {
//             return res.status(400).send('Error en la solicitud de Pokémon.');
//         }
//         const pokeurl = data.results
//         const pokeComplete = await axios.all(
//             pokeurl.map(async (pokeInd) => {
//               let infoPush = await axios.get(pokeInd.url);
//               return {
//                 id: infoPush.data.id,
//                 name: infoPush.data.name,
//                 hp: infoPush.data.stats[0].base_stat,
//                 attack: infoPush.data.stats[1].base_stat,
//                 defense: infoPush.data.stats[2].base_stat,
//                 speed: infoPush.data.stats[5].base_stat, 
//                 height: infoPush.data.height,
//                 weight: infoPush.data.weight,
//                 image: infoPush.data.sprites.other.dream_world.front_default,
//                 types: infoPush.data.types.map((type) => type.type.name), 
//               }
//             })
//           )
//           return res.status(200).json(pokeComplete)
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send(error.message)
//     }
// }

// module.exports = getPokemons

// listo ahora si trae el arreglo de objetos donde cada {} es un pokemon con su info




//https://pokeapi.co/api/v2/    este me trae un {} con info y a la par nomas una url para acceder a mas info 
//https://pokeapi.co/api/v2/pokemon/?limit=40   este me trae un [] de {} donde aparece el nombre de cada 
//pokemon  y una url abajo para acceder a mas info 


const axios = require('axios');

let cachedResults = null;

const getPokemons = async (req, res) => {
    try {
        // Si ya hay resultados en caché, devuelve esos resultados
        if (cachedResults) {
            return res.status(200).json(cachedResults);
        }

        const { data } = await axios('https://pokeapi.co/api/v2/pokemon/?limit=40');
        
        if (!data.results || data.results.length === 0) {
            return res.status(400).send('Error en la solicitud de Pokémon.');
        }

        const pokeurl = data.results;

        // Realizar solicitudes individuales en serie
        const pokeComplete = [];
        for (const pokeInd of pokeurl) {
            const infoPush = await axios.get(pokeInd.url);
            pokeComplete.push({
                id: infoPush.data.id,
                name: infoPush.data.name,
                hp: infoPush.data.stats[0].base_stat,
                attack: infoPush.data.stats[1].base_stat,
                defense: infoPush.data.stats[2].base_stat,
                speed: infoPush.data.stats[5].base_stat, 
                height: infoPush.data.height,
                weight: infoPush.data.weight,
                image: infoPush.data.sprites.other.dream_world.front_default,
                types: infoPush.data.types.map(type => type.type.name), 
            });
        }

        // Almacena los resultados en caché para futuras solicitudes
        cachedResults = pokeComplete;

        return res.status(200).json(pokeComplete);
    } catch (error) {
        console.error("Error en la solicitud principal:", error);
        res.status(500).send(error.message);
    }
}

module.exports = getPokemons;


//ya no se demora porque guarda en un tipo cache que hice entonces solo se demora 
//por primera vez y si refresco la pantalla ya busca la info de ese cache

