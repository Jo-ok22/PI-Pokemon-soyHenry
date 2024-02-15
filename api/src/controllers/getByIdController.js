// const axios = require('axios');

// const getPokemonById = async (req, res) => {
//     try {
//         const { id } = req.params
//          console.log(id);
//          if (id === undefined) {
//              return res.status(400).send("El parámetro 'id' es obligatorio.");
//          }
//          const pokemonId = await axios.get(`https://pokeapi.co/api/v2/${id}`)
//          const pokemonInfo = {
//             id: pokemonId.data.id,
//             name: pokemonId.data.name,
//             image: pokemonId.data.sprites.other["official-artwork"].front_default,
//             hp: pokemonId.data.stats[0].base_stat,
//             attack: pokemonId.data.stats[1].base_stat,
//             defense: pokemonId.data.stats[2].base_stat,
//             speed: pokemonId.data.stats[5].base_stat,
//             height: pokemonId.data.height,
//             weight: pokemonId.data.weight,
//             types: pokemonId.data.types.map((t) => t.type.name),
//           };
//           pokemonInfo
//             ? res.status(200).send(pokemonInfo)
//             : res.status(404).send("No existe el ID en la API!!");
//     } catch (error) {
//         console.error("Error:", error);
//         res.status(500).send(error.message)
//     }
// }

// module.exports = getPokemonById




//no me funciona 




