import { useEffect, useState } from 'react';
import validation from './validation';
import style from './Form.module.css';

const Form = () =>{

    const [input , setInput] = useState({
        nombre:'',
        imagen:'',
        vida:'',
        ataque:'',
        defensa:'',
        velocidad:'',
        altura:'',
        peso:'',
        tipos:''
    })

    const [error, setError] = useState({})


    const handleChange = (event) =>{
        setInput({...input, [event.target.name]:event.target.value})
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = {
            name: input.nombre,
            image: input.imagen,
            hp: input.vida,
            attack: input.ataque,
            defense: input.defensa,
            speed: input.velocidad,
            height: input.altura,
            weight: input.peso,
            types: input.tipos.split(',').map(type => type.trim())
        };
    
        try {
            const response = await fetch('http://localhost:3001/pokemons', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error(`Error al enviar los datos: ${response.statusText}`);
            }
    
            setInput({
                nombre: '',
                imagen: '',
                vida: '',
                ataque: '',
                defensa: '',
                velocidad: '',
                altura: '',
                peso: '',
                tipos: ''
            });
            setError({});
    
        } catch (error) {
            console.error('Error al enviar los datos:', error.message);
        }
    };

    

    useEffect(()=>{
        if(input.nombre !== '' || input.imagen !== '' || input.vida !== ''){
            setError(validation(input))
        }
    },[input])


    return(
        <div className={style.center} >
          <form className={style.container} onSubmit={handleSubmit}>
            <label htmlFor="nombre" className={style.label}>Nombre: </label>
            <input type="text" name="nombre" value={input.nombre} onChange={handleChange}/>
            {error.nombre && <p className={style.validation}>{error.nombre}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="imagen" className={style.label}>Imagen: </label>
            <input type="text" name="imagen" value={input.imagen} onChange={handleChange}/>
            {error.imagen && <p className={style.validation}>{error.imagen}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="vida" className={style.label}>Vida: </label>
            <input type="text" name="vida" value={input.vida} onChange={handleChange}/>
            {error.vida && <p className={style.validation}>{error.vida}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="ataque" className={style.label}>Ataque: </label>
            <input type="text" name="ataque" value={input.ataque} onChange={handleChange}/>
            {error.ataque && <p className={style.validation}>{error.ataque}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="defensa" className={style.label}>Defensa: </label>
            <input type="text" name="defensa" value={input.defensa} onChange={handleChange}/>
            {error.defensa && <p className={style.validation}>{error.defensa}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="velocidad" className={style.label}>Velocidad: </label>
            <input type="text" name="velocidad" value={input.velocidad} onChange={handleChange}/>
            {error.velocidad && <p className={style.validation}>{error.velocidad}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="altura" className={style.label}>Altura: </label>
            <input type="text" name="altura" value={input.altura} onChange={handleChange}/>
            {error.altura && <p className={style.validation}>{error.altura}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="peso" className={style.label}>Peso: </label>
            <input type="text" name="peso" value={input.peso} onChange={handleChange} />
            {error.peso && <p className={style.validation}>{error.peso}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="tipos" className={style.label}>Tipos: </label>
            <input type="text" name="tipos" value={input.tipos} onChange={handleChange}/>
            {error.tipos && <p className={style.validation}>{error.tipos}</p>}


            <hr style={{borderStyle: "none"}}/>

            {error.nombre || error.imagen || error.vida || error.ataque || error.defensa 
            || error.velocidad || error.altura || error.peso || error.tipos ?
            null : <button type="submit" className={style.button}>crear</button>}

            </form>
        </div>
    )
}

export default Form;