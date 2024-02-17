import Card from '../card/Card';

const Cards = ({personajePokemons, onClose}) => {
    return(
        <div>
            {personajePokemons.map(({id, name, image, Types}) =>{
                return <Card
                key={id}
                id={id}
                name={name}
                image={image}
                onClose={onClose}
                Types={Types}
                />
            })}

        </div>
    )
}

export default Cards