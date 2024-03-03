
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(`http://localhost:3001/pokemons/?name=${name}`);
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error al buscar el Pokémon: ${response.statusText}`);
      }

      const data = await response.json();

      onSearch(data);
    } catch (error) {
      console.error('Error al buscar el Pokémon:', error.message);
    }
  };

  return (
    <div>
      <input type="search" onChange={handleChange} value={name} />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
}

export default SearchBar;
