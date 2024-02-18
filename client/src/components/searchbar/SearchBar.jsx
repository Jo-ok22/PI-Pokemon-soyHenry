// import { useState } from 'react';
// //                aca va el name del pokemon a buscar 
// const SearchBar = () => {
//     const [name, setName] = useState('');
//     const handlerChange = (event) => {
//         setName(event.target.value)
//     }
//     return(
//         <div>
//             <input
//             type="search"
//             onChange={handlerChange}
//             value={name}
//             />
//             <button onClick={'buscarelnombredelpokemon'}>Buscar</button>

//         </div>
//     )
// }

// export default SearchBar;



// import { useState } from 'react';

// const SearchBar = ({ onSearch }) => {
//   const [name, setName] = useState({
//     name:''
//   });

//   const handleChange = (event) => {
//     setName({...name, [event.target.name]:event.target.value})
//   };

//   const handleSearchClick = () => {
//     onSearch(name); // Aquí debes pasar el valor actual de 'name'
//   };

//   return (
//     <div>
//         <input type="text" onChange={handleChange} value={name} />
//       <button onClick={handleSearchClick}>Buscar</button>
//     </div>
//   );
// }

// export default SearchBar;


import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(name); // Aquí debes pasar el valor actual de 'name'
  };

  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <button onClick={handleSearchClick}>Buscar</button>
    </div>
  );
}

export default SearchBar;
