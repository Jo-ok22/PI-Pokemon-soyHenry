const { Router } = require('express');

const { getPokemonsHandler, getPokeByIdHandler, getTypesHandler, postPokemonHandler } = require('../handlers/pokemonHandlers');


const router = Router();


router.get('/pokemons',  getPokemonsHandler)

router.get('/pokemons/:id', getPokeByIdHandler);

router.get('/pokemons/', getPokemonsHandler)

router.post('/pokemons', postPokemonHandler);

router.get('/types', getTypesHandler);


module.exports = router;
