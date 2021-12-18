import React from 'react'

export const Funciones = () => {

    const sumar = (numero1 : number, numero2 :number): number => {
        return numero1 + numero2;
    }

    return (
        <div>
            <p>Funciones</p>
            <b>{`EL resultado es ${ sumar(2,4) }`}</b>
        </div>
    )
}
