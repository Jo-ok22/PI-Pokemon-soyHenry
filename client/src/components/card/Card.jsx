 import { Link } from 'react-router-dom';
 import style from './Card.module.css'

const Card = ({ id, name, image, types, onClick }) => {
    return (
        <div className={style.container} onClick={() => onClick(id)}>
            <h2 className={style.name}>Nombre: {name}</h2>
            <h3 className={style.name}>Tipos: {types.join(',')}</h3>
            <Link to={`/detail/${id}`}> 
                <img src={image} alt={name} />
            </Link>
        </div>
    );
}

export default Card;
