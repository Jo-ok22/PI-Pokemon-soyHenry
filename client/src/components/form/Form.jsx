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
    const handleSubmit = () => {
        event.preventDefault();
        setInput({
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
    }
    useEffect(()=>{
        if(input.nombre !== '' || input.imagen !== '' || input.vida !== ''){
            setError(validation(input))
        }
    },[input])

    return(
        <div className={style.center} >
          <form className={style.container} onSubmit={handleSubmit}>
            <label htmlFor="nombre">Nombre: </label>
            <input type="text" name="nombre" value={input.nombre} onChange={handleChange}/>
            {error.nombre && <p className={style.validation}>{error.nombre}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="imagen">Imagen: </label>
            <input type="text" name="imagen" value={input.imagen} onChange={handleChange}/>
            {error.imagen && <p className={style.validation}>{error.imagen}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="vida">Vida: </label>
            <input type="text" name="vida" value={input.vida} onChange={handleChange}/>
            {error.vida && <p className={style.validation}>{error.vida}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="ataque">Ataque: </label>
            <input type="text" name="ataque" value={input.ataque} onChange={handleChange}/>
            {error.ataque && <p className={style.validation}>{error.ataque}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="defensa">Defensa: </label>
            <input type="text" name="defensa" value={input.defensa} onChange={handleChange}/>
            {error.defensa && <p className={style.validation}>{error.defensa}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="velocidad">Velocidad: </label>
            <input type="text" name="velocidad" value={input.velocidad} onChange={handleChange}/>
            {error.velocidad && <p className={style.validation}>{error.velocidad}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="altura">Altura: </label>
            <input type="text" name="altura" value={input.altura} onChange={handleChange}/>
            {error.altura && <p className={style.validation}>{error.altura}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="peso">Peso: </label>
            <input type="text" name="peso" value={input.peso} onChange={handleChange} />
            {error.peso && <p className={style.validation}>{error.peso}</p>}

            <hr style={{borderStyle: "none"}}/>

            <label htmlFor="tipos">Tipos: </label>
            <input type="text" name="tipos" value={input.tipos} onChange={handleChange}/>

            <hr style={{borderStyle: "none"}}/>

            <button type="submit" className={style.button}>crear</button>

            </form>
        </div>
    )
}

export default Form