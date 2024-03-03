import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import style from './Detail.module.css';

const Detail = () => {
    const { id } = useParams(); 
    const [pokemonpersonaje, setPokemonpersonaje] =useState({})

    useEffect(()=>{
        axios(`http://localhost:3001/pokemons/${id}`)
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
        <div className={style.container2}>
            <h2 className={style.h2}>Id: {pokemonpersonaje?.id}</h2>
            <h3 className={style.h3}>Nombre: {pokemonpersonaje?.name}</h3>
            <p className={style.p}>Vida: {pokemonpersonaje?.hp}</p>
            <p className={style.p}>Ataque: {pokemonpersonaje?.attack}</p>
            <p className={style.p}>Defensa: {pokemonpersonaje?.defense}</p>
            <p className={style.p}>Velocidad: {pokemonpersonaje?.speed}</p>
            <p className={style.p}>Altura: {pokemonpersonaje?.height}</p>
            <p className={style.p}>Peso: {pokemonpersonaje?.weight}</p>
            <p className={style.p}>Tipo: {pokemonpersonaje?.type}</p>
            <img src={pokemonpersonaje?.image} alt={pokemonpersonaje?.name} />
            <Link to='/form'>
            <button>Form</button>
            </Link>
        </div>
    )
}

export default Detail;