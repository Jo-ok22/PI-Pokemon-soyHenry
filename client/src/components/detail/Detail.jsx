import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';


const Detail = () => {
    const { id } = useParams(); 
    const [pokemonpersonaje, setPokemonpersonaje] =useState({})

    useEffect(()=>{
        axios(`url buscar que traiga por id`)
        .then(({data}) => {
            if(data.name){
                setPokemonpersonaje(data) 
            }
            else{
                alert('No hay pokemon con ese ID')
            }
        })
        .catch(() => {
            console.log('error al traer pokemones');
        })
        return setPokemonpersonaje({});
    },[id])

    return(
        <div>
            <h2>Vida:{pokemonpersonaje?.hp}</h2>
            <h2>Ataque:{pokemonpersonaje?.attack}</h2>
            <h2>Defensa:{pokemonpersonaje?.defense}</h2>
            <h2>Velocidad:{pokemonpersonaje?.speed}</h2>
            <h2>Altura:{pokemonpersonaje?.height}</h2>
            <h2>Peso:{pokemonpersonaje?.weight}</h2>

            <Link to='/form'>
            <button>Form</button>
            </Link>
        </div>
    )
}

export default Detail
