// const axios = require('axios');
// const { Pokemon } = require('../db');
// const { where } = require('sequelize');

// const pokeName = async (req, res) => {
//     try {
//         const { name } = req.query
//         if(!name){
//            return res.status(400).send('ingresa un nombre')
//         }
//         const loweCase = name.toLowerCase();
//         const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${loweCase}`)
//             const apiname = data.forms[0]?.name
//             console.log(apiname);

//         const buscarDb = await Pokemon.findOne({ where: { name: apiname } })
        
//         let source;
//         let finalPokemonName;

//         if (apiname && buscarDb) {
//             source = 'Ambos';
//             finalPokemonName = { api: apiname, db: buscarDb };
//         } else if (apiname) {
//             source = 'API';
//             finalPokemonName = apiname;
//         } else if (buscarDb) {
//             source = 'Base de Datos';
//             finalPokemonName = buscarDb;
//         } else {
//             return res.status(404).send('Nombre de Pokémon incorrecto.'); 
//         }
//         res.status(200).json({ source, name: finalPokemonName });

//     } catch (error) {
//         console.error("Error:", error);
//         if (error.response && error.response.status === 404) {
//             return res.status(404).send('Nombre de Pokémon incorrecto.');
//         }
//         res.status(500).send(error.message)
//     }
// }

// module.exports=pokeName


//listo  si trae de la api y te habisa de donde es si de api o db


// const axios = require('axios');
// const { Pokemon } = require('../db');

// const pokeName = async (req, res) => {
//     try {
//         const { name } = req.query;

//         if (!name) {
//             return res.status(400).send('Ingresa un nombre');
//         }

//         const lowercaseName = name.toLowerCase();

//         // Buscar en la API
//         let apiName;
//         try {
//             const apiResponse = await axios(`https://pokeapi.co/api/v2/pokemon/${lowercaseName}`);
//             apiName = apiResponse.data.forms[0]?.name;
//         } catch (apiError) {
//             // Manejar el error de la API
//             if (apiError.response && apiError.response.status === 404) {
//                 apiName = null;
//             } else {
//                 throw apiError;
//             }
//         }

//         // Buscar en la base de datos
//         const dbPokemon = await Pokemon.findOne({ where: { name: lowercaseName } });

//         let source;
//         let finalPokemonName;

//         if (apiName || dbPokemon) {
//             source = apiName && dbPokemon ? 'Ambos' : apiName ? 'API' : 'Base de Datos';
//             finalPokemonName = apiName || dbPokemon;
//         } else {
//             return res.status(404).send('Nombre de Pokémon incorrecto.');
//         }

//         res.status(200).json({ source, name: finalPokemonName });

//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send(error.message);
//     }
// }

// module.exports = pokeName;


//LISTO RE LISTO BUSCA EN API Y DB Y DICE DE DONDE VINO !!!


const axios = require('axios');
const { Pokemon } = require('../db');

const getPokemonInfo = async (name) => {
    // Buscar en la API
    let apiResponse;
    try {
        apiResponse = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
    } catch (apiError) {
        // Manejar el error de la API
        if (apiError.response && apiError.response.status === 404) {
            apiResponse = null;
        } else {
            throw apiError;
        }
    }

    // Buscar en la base de datos
    const dbPokemon = await Pokemon.findOne({ where: { name: name } });

    if (apiResponse) {
        // Devolver información de la API
        return {
            source: 'API',
            data: {
                id: apiResponse.data.id,
                name: apiResponse.data.name,
                vida:apiResponse.data.stats[0].base_stat,
                ataque:apiResponse.data.stats[1].base_stat,
                defense:apiResponse.data.stats[2].base_stat,
                velocidad:apiResponse.data.stats[5].base_stat, 
                altura:apiResponse.data.height,
                peso:apiResponse.data.weight,
                image:apiResponse.data.sprites.other.dream_world.front_default,
                types:apiResponse.data.types.map(type => type.type.name),
                // Otros campos que desees incluir
            },
        };
    } else if (dbPokemon) {
        // Devolver información de la base de datos
        return {
            source: 'Base de Datos',
            data: {
                id: dbPokemon.id,
                name: dbPokemon.name,
                vida: dbPokemon.data.stats[0].base_stat,
                ataque:dbPokemon.data.stats[1].base_stat,
                defense:dbPokemon.data.stats[2].base_stat,
                velocidad:dbPokemon.data.stats[5].base_stat, 
                altura:dbPokemon.data.height,
                peso:dbPokemon.data.weight,
                image:dbPokemon.data.sprites.other.dream_world.front_default,
                types:dbPokemon.data.types.map(type => type.type.name),
                // Otros campos que desees incluir
            },
        };
    } else {
        return null; // No se encontró el Pokémon
    }
};

const pokeName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).send('Ingresa un nombre');
        }

        const lowercaseName = name.toLowerCase();

        const pokemonInfo = await getPokemonInfo(lowercaseName);

        if (pokemonInfo) {
            res.status(200).json(pokemonInfo);
        } else {
            return res.status(404).send('Nombre de Pokémon incorrecto.');
        }

    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message);
    }
};

module.exports = pokeName;
