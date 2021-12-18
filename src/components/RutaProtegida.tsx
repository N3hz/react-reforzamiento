import React from 'react'
import { useSelector } from 'react-redux';

export const RutaProtegida = () => {
    // @ts-ignore
    const { name } = useSelector(state => state.auth)

    return (
        <div>
            <h3>Esta Ruta está protegida</h3>
            <h4>Bienvenido <b>{name}</b>!!</h4>
        </div>
    )
}
