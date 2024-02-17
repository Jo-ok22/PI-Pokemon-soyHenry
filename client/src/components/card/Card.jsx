import { Link } from 'react-router-dom';

const Card = ({id, name, Types, image}) => {
    return(
        <div>
        <h2>Nombre:{name}</h2>
        <h2>Tipos:{Types}</h2>
         <Link to={'/detail'}> 
        <img src={image} alt={name}/>
        </Link>
        </div>
    )
}

export default Card;


//linea 8`/detail/${id}`