const {getAllPokemon, getPokemonName, getPokemonById, getPokemonTypes, newPokemonDb} = require('../controllers/pokemonControllers');

const getPokemonsHandler = async (req, res) => {
    const { name } = req.query
    try {
        if(name){
            const pokemonName = await getPokemonName(name)
            res.status(200).json(pokemonName);
        } else {
            const response = await getAllPokemon();
            res.status(200).json(response);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const getPokeByIdHandler = async (req, res) => {
    const { id } = req.params;
    let source;

    if (isNaN(id)) {
        // Si id no es un número, entonces la fuente es 'baseDeDatos'
        source = 'baseDeDatos';
    } else {
        // Si id es un número, entonces la fuente es 'api'
        source = 'api';
    }

    try {
        const response = await getPokemonById(id, source);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



const getTypesHandler = async (req, res) => {
    try {
        const response = await getPokemonTypes()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
};



const postPokemonHandler = async (req, res) => {
    const { name, hp, attack, defense, speed, height, weight, image, types } = req.body
    try {
        const postPokemonHandler = await newPokemonDb(name, hp, attack, defense, speed, height, weight, image, types)
        if(!name){
            res.status(404).send('faltan datos')
        } else {
            res.status(201).json(postPokemonHandler)
        } 
    } catch (error) {
        res.status(400).json({ error: error.message})
    }
}





module.exports = {getPokemonsHandler, getPokeByIdHandler, getTypesHandler, postPokemonHandler};








// const getById = require('../controllers/getByIdController');
// const getAllPokemon = require('../controllers/pokemonControllers')




// const getPokemonHandler = async (req, res) => {
//     const { name } = req.query;
    
//     try {
//         if(name){
//             const pokemonName = await getPokemonName(name)
//             res.status(200).json(pokemonName);
//         }else{
//             const response = await getAllPokemon()
//             if(!response){
//                 res.status(400).json({error: error.message})
//             }else{
//                 res.status(200).json(response)
//             }
//         }
        
//     } catch (error) {
//         res.status(500).json({error: error.message})
//     }
// }



// module.exports = getPokemonHandler






//  const getByIdHandler = async (req, res) => {
//    const { id } = req.params;
//    console.log(id);
//    try {
//       let source;

//       if (isNaN(id)) {
//           // Si id no es un número, entonces la fuente es 'baseDeDatos'
//           source = 'baseDeDatos';
//       } else {
//           // Si id es un número, entonces la fuente es 'api'
//           source = 'api';
//       }

//       const response = await getById(id, source);
//       res.status(200).json(response);
//   } catch (error) {
//       res.status(400).json({ error: error.message });
//   }
// };