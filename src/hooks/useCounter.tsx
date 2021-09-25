import {useState} from 'react'

export const useCounter = (numeroInicio : number) => {
    
    const [numero, setnumero] = useState( parseInt( localStorage.getItem('lastNumber') ?? numeroInicio.toString() ) );

    const sumando = (numeroSumado: number) => {
        setnumero(numero + numeroSumado);
    }

    localStorage.setItem('lastNumber', numero.toString() )

    return { numero, sumando };
}
