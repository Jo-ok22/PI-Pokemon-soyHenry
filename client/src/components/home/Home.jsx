import SearchBar from '../searchbar/SearchBar';
import { useEffect, useState } from 'react';
import Cards from '../cards/Cards';
import Pagination from '../pagination/Pagination';
import axios from 'axios';

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [searchName, setSearchName] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pokemonsPerPage] = useState(12);
  
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

    const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = searchName.length > 0 ? searchName : pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

 const handlerSearch = async (name) => {
    console.log(name);
    try {
        const { data } = await axios(`http://localhost:3001/pokemons/?name=${name}`);
        setSearchName(data);
    } catch (error) {
        alert(`no hay un pokemon con ese ${name}`)
        setSearchName([]);
    }
}




return (
    <div>
      <h1>Este es el Home</h1>
        <button>A-Z</button>
        <button>Z-A</button>

      <SearchBar onSearch={handlerSearch} />


      <Cards pokemons={currentPokemons} />
      
      <Pagination
        pokemonsPerPage={pokemonsPerPage}
        totalPokemons={searchName.length > 0 ? searchName.length : pokemons.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />


    </div>
  );
}
 
export default Home;
