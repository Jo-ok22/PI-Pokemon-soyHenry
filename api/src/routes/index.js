const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemon = require('../controllers/getController');
const getPokemonById = require('../controllers/getByIdController');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getPokemon)
router.get('/pokemons/:idPokemon', getPokemonById)


module.exports = router;
