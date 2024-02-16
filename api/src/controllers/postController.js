const axios = require('axios')
const { Pokemon, Type } = require('../db');
// falta este que no puede relacionar los types

const postPokemon = async (req, res) => {
    try {
        const { name, hp, attack, defense, speed, height, weight, image, types } = req.body;

        if (!name || !hp || !attack || !defense || !speed || !height || !weight || !image || !types) {
            res.status(400).send('Faltan datos o los tipos no son válidos');
            return;
        }

        const createPokemon = await Pokemon.create({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            image,
        });

        if (!Array.isArray(types) || types.length === 0) {
            res.status(400).send('Faltan tipos o los tipos no son válidos');
            return;
        }

        // Busca o crea los tipos en la base de datos
        const foundTypes = await Type.findAll({
            where: { name: types },
        });

        if (foundTypes.length !== types.length) {
            res.status(400).send('Uno o más tipos no son válidos');
            return;
        }

        // Relaciona los tipos con el nuevo Pokémon
        await createPokemon.setTypes(foundTypes);

        res.status(201).json(createPokemon);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send(error.message);
    }
};

module.exports = postPokemon;







// const { Pokemon, Type } = require('../db');

// const postPokemon = async (req, res) => {
//     try {
//         const { name, hp, attack, defense, speed, height, weight, image } = req.body;
//         const typesFromUrl = req.query.types || []; // Obtener los tipos desde la URL como un array

//         if (!name || !hp || !attack || !defense || !speed || !height || !weight || !image || typesFromUrl.length < 2) {
//             return res.status(400).send('Faltan datos o los tipos no son válidos.');
//         }

//         // Buscar los tipos en la base de datos
//         const foundTypes = await Type.findAll({ where: { name: typesFromUrl } });

//         if (foundTypes.length !== typesFromUrl.length) {
//             return res.status(400).send('Alguno(s) de los tipos proporcionados no existen.');
//         }

//         // Crear el nuevo Pokémon
//         const createdPokemon = await Pokemon.create({ name, hp, attack, defense, speed, height, weight, image });

//         // Relacionar los tipos encontrados con el nuevo Pokémon
//         await createdPokemon.addTypes(foundTypes);

//         res.status(201).json(createdPokemon);
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send(error.message);
//     }
// };

// module.exports = postPokemon;







// const { Pokemon, Type } = require('../db')

// const postPokemon = async (req, res) => {
//     try {
//         const {name, hp, attack, defense, speed, height, weight, image} = req.body
//         if(!name || !hp || !attack || !defense || !speed || !height || !weight || !image){
//             res.status(400).send('faltan datos');
//         }
//         else {
//             const createPokemon = await Pokemon.create({ name, hp, attack, defense, speed, height, weight, image})
//             // const foundTypes = await Type.findAll({ where: { name: Type } });
//             // await createPokemon.addTypes(foundTypes);
//             res.status(201).json(createPokemon) 
//         }
        
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send(error.message)  
//     }
// }

// module.exports=postPokemon
// falta que relacione con los type




// const { Pokemon, Type } = require('../db');

// const postPokemon = async (req, res) => {
//     try {
//         const { name, hp, attack, defense, speed, height, weight, image, types } = req.body;

//         if (!name || !hp || !attack || !defense || !speed || !height || !weight || !image || !types || types.length < 2) {
//             return res.status(400).send('Faltan datos o tipos insuficientes (se necesitan al menos dos tipos).');
//         }

//         // Crear el Pokémon en la base de datos
//         const createdPokemon = await Pokemon.create({ name, hp, attack, defense, speed, height, weight, image });

//         // Obtener o crear los tipos y asociarlos al Pokémon
//         const createdTypes = await Promise.all(types.map(async (typeName) => {
//             return await Type.findOrCreate({
//                 where: { name: typeName },
//                 defaults: { name: typeName }
//             });
//         }));

//         // Asociar los tipos al Pokémon
//         await createdPokemon.setTypes(createdTypes.map(type => type[0]));

//         res.status(201).json(createdPokemon);
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send(error.message);
//     }
// }

// module.exports = postPokemon;
