import style from './Cards.module.css'



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
