import {useState} from 'react'

export const useForms = <T extends Object>(formulario: T) => {
    const [formularioFull, setstate] = useState(formulario)

    const changeImput = ( value :string, campo: keyof T ) => {
        setstate({
            ...formularioFull,
            //Las llaves [] buscan el campo con esa propiedad
            [campo] : value
        });  
    }

    return {
        ...formularioFull,
        formularioFull,
        changeImput
    };
}
