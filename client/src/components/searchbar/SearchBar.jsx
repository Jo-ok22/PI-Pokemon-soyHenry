import { useState } from 'react';
//                aca va el name del pokemon a buscar 
const SearchBar = () => {
    const [name, setName] = useState('');
    const handlerChange = (event) => {
        setName(event.target.value)
    }
    return(
        <div>
            <input
            type="search"
            onChange={handlerChange}
            value={name}
            />
            <button onClick={'buscarelnombredelpokemon'}>Buscar</button>

        </div>
    )
}

export default SearchBar;