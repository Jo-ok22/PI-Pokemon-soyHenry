import SearchBar from '../searchbar/SearchBar';
//import { Link } from "react-router-dom"
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import axios from 'axios';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchName, setSearchName] = useState([]);
  
    useEffect(() => {
      axios('http://localhost:3001/pokemons')
        .then((response) => {
            console.log(response); 
          const data = response.data;
          setPokemons(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []); 

//   const handlerSearch = async (pokeName) => {
//     try {
//         const { data } = await axios(`http://localhost:3001/pokemons/name?name=${pokeName}`)
//         console.log(data);
//         setSearchName(data)
//     } catch (error) {
//         console.log('Error searching for Pokemon:', error);
//       setSearchName([]); 
//     }
//   }


const handlerSearch = async (pokeName) => {
    try {
        const { data } = await axios(`http://localhost:3001/pokemons/name?name=${pokeName}`);
        setSearchName(data);
    } catch (error) {
        console.error('Error searching for Pokemon:', error.response); // Cambiado para mostrar el error completo
        setSearchName([]);
    }
}


    // return (
    //     <div>
    //       <h1>Este es el Home</h1> 
    //       <SearchBar onSearch={handlerSearch}/>
    //       {searchName.length > 0?(
    //           <Cards pokemons={searchName} />
    //         ):(<Cards pokemons={pokemons}/>
    //         )}
    //     </div>
    //   );
    // };


    return (
        <div>
            <h1>Este es el Home</h1> 
            <SearchBar onSearch={handlerSearch} />
            {searchName.length > 0 ? (
                <Cards pokemons={searchName} />
            ) : (
                <Cards pokemons={pokemons} />
            )}
        </div>
    );
    
    }  

export default Home