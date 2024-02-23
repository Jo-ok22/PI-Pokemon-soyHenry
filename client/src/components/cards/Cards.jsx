// import Card from '../card/Card';
import style from './Cards.module.css'

// const Cards = ({pokemones}) => {
//     return(
//         <div>
//             {pokemones.map(({id, name, image, types}) =>{
//                 return <Card
//                 key={id}
//                 id={id}
//                 name={name}
//                 image={image}
//                 onClose={onClose}
//                 types={types}
//                 />
//             })}

//         </div>
//     )
// }

// export default Cards


import Card from '../card/Card';

const Cards = ({ pokemons }) => {
    return (
        <div className={style.container}>
            {pokemons.map((pokemon) => (
                <Card
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.image}
                    types={pokemon.types} 
                />
            ))}
        </div>
    );
}

export default Cards;
