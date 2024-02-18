 import { Link } from 'react-router-dom';

// const Card = ({name, types, image}) => {
//     return(
//         <div>
//         <h2>Nombre:{name}</h2>
//         <h3>Tipos:{types.join(',')}</h3>
//          <Link to={'/detail'}> 
//         <img src={image} alt={name}/>
//         </Link>
//         </div>
//     )
// }

// export default Card;


//linea 8`/detail/${id}`




const Card = ({ id, name, image, types }) => {
    return (
        <div>
            <h2>Nombre: {name}</h2>
            <h3>Tipos: {types.join(',')}</h3>
            <Link to={'/detail'}> 
                <img src={image} alt={name} />
            </Link>
        </div>
    );
}

export default Card;
