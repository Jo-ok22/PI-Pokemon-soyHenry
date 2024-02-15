const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemon = require('../controllers/getController');
const getPokemonById = require('../controllers/getByIdController');
const pokeName = require('../controllers/getNameController');
const postPokemon = require('../controllers/postController');
const getTypes = require('../controllers/getTypesController');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons', getPokemon);

//router.get('/pokemons/:idPokemon', getPokemonById);

router.get('/pokemons/name', pokeName)

router.post('/pokemons', postPokemon);

router.get('/types', getTypes);


module.exports = router;
