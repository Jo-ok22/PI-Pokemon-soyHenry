const axios = require('axios');
const { Type } = require('../db');

const getTypes = async (req, res) => {
    try {
       const { data } = await axios('https://pokeapi.co/api/v2/type')

       const comprobarDb =  await Type.count() === 0;
       if(comprobarDb){
           const typeguaradar =  data.results
           const guardartype =  await Type.bulkCreate(typeguaradar)
           return res.status(200).json(guardartype)  
        }
        else {
            return res.status(404).send("La base de datos este llena ya contiene tipos de Pokémon.");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send(error.message)
    }
}

module.exports=getTypes

//listo 




// para el post 0d260507-f5aa-4828-b12f-9460a59831e2