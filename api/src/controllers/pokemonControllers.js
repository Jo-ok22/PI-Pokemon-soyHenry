const { Pokemon, Type } = require('../db');
const axios = require('axios');

const getAllPokemon = async () => {
    try {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=40');
        const pokeApi = await Promise.all(data.results.map(async (pokemon) => {
            const pokemonData = (await axios.get(pokemon.url)).data;

            return {
                id: pokemonData.id,
                name: pokemonData.name,
                hp: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                speed: pokemonData.stats[5].base_stat,
                height: pokemonData.height,
                weight: pokemonData.weight,
                image: pokemonData.sprites.other.dream_world.front_default,
                types: pokemonData.types.map((type) => type.type.name),
            };
        }));
        console.log(pokeApi);
        return pokeApi;
    } catch (error) {
        throw error;
    }
};



const getPokemonName = async (name) => {
    try {
        const lower = name.toLowerCase()
        const pokeApi = await getAllPokemon()
        const pokemonFilterName = pokeApi.filter((poke)=> poke.name === lower);
        const pokeDbFilterName = await Pokemon.findAll({where: {name: lower}});
        const result = [...pokemonFilterName, ...pokeDbFilterName];
        if(result.length === 0){
            throw new Error(`No se encontró ningún Pokémon con el nombre ${lower}`);
        }
        return result
        
    } catch (error) {
        throw error
    }
}


const getPokemonById = async (id, source) => {
    try {
        let pokemonById;

        if (source === 'api') {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            if (!response.data) {
                throw new Error(`No se encontró ningún Pokémon con el ID ${id}`);
            }
            const pokemonData = response.data;
            pokemonById = {
                id: pokemonData.id,
                name: pokemonData.name,
                hp: pokemonData.stats[0].base_stat,
                attack: pokemonData.stats[1].base_stat,
                defense: pokemonData.stats[2].base_stat,
                speed: pokemonData.stats[5].base_stat,
                height: pokemonData.height,
                weight: pokemonData.weight,
                image: pokemonData.sprites.other.dream_world.front_default,
                types: pokemonData.Types?.map((type) => type.type.name),
            };
        } else {
            pokemonById = await Pokemon.findOne({where: { id: id }});
            if (!pokemonById) {
                throw new Error(`No se encontró ningún Pokémon en la base de datos con el ID ${id}`);
            }
            pokemonById = {
                id: pokemonById.id,
                name: pokemonById.name,
                hp: pokemonById.hp,
                attack: pokemonById.attack,
                defense: pokemonById.defense,
                speed: pokemonById.speed,
                height: pokemonById.height,
                weight: pokemonById.weight,
                image: pokemonById.image,
                types: pokemonById.Types?.map(type => type.name),
            };
        }

        return pokemonById;
    } catch (error) {
        throw error;
    }
};


const getPokemonTypes = async () => {
    try {
        const { data } = await axios('https://pokeapi.co/api/v2/type');
        
        const checkDb = await Type.count() === 0;

        if (checkDb) {
            const typesToSave = data.results.map((type) => ({
                name: type.name
            }));

            const savedTypes = await Type.bulkCreate(typesToSave);
            return savedTypes;
        } else {
            return 'Base de datos cargada con los types';
        }
    } catch (error) {
        throw error;
    }
};



const newPokemonDb = async (name, hp, attack, defense, speed, height, weight, image, types) => {
    try {
        if (!types || types.length === 0) {
            throw new Error("Se requiere al menos un tipo para el Pokémon.");
        }

        const pokemonNuevo = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
        });
        const pokeTypes = await Type.findAll({ where: { name: types } });

        await pokemonNuevo.addTypes(pokeTypes);

        return pokemonNuevo;
    } catch (error) {
        throw error; 
    }
};



module.exports = {getAllPokemon, getPokemonName, getPokemonById, getPokemonTypes, newPokemonDb};