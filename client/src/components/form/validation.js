const validation = (input) => {
    const error = {};
    if(!/^[a-zA-Z]+$/.test(input.nombre)){
        error.nombre ='debe contener solo letras de a a la z'
    }
    if(input.nombre === ''){
        error.nombre = 'el campo no puede estar vacio'
    }
    if(!/^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png|gif|bmp)$/.test(input.imagen)){
        error.imagen = 'URL no válida para una imagen'
    }
    if(!/^[0-9]+$/.test(input.vida)){
        error.vida = 'el campo solo acepta numeros del 0 al 9'
    }
    if(!/^[0-9]+$/.test(input.ataque)){
        error.ataque = 'el campo solo acepta numeros del 0 al 9'
    }
    if(!/^[0-9]+$/.test(input.defensa)){
        error.defensa = 'el campo solo acepta numeros del 0 al 9'
    }
    if(!/^[0-9]+$/.test(input.velocidad)){
        error.velocidad = 'el campo solo acepta numeros del 0 al 9'
    }
    if(!/^[0-9]+$/.test(input.altura)){
        error.altura = 'el campo solo acepta numeros del 0 al 9'
    }
    if(!/^[0-9]+$/.test(input.peso)){
        error.peso = 'el campo solo acepta numeros del 0 al 9'
    }

    return error
}

//listo


export default validation;