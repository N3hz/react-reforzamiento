import React from 'react'

interface Persona {
    nombre:string,
    edad:number,
    direccion:Direccion
}

interface Direccion{
    pais:string,
    nro:number
}

export const ObjetosLiterales = () => {

    const persona : Persona = {
        nombre: 'Daniel',
        edad: 30,
        direccion: {
            pais : 'Canada',
            nro : 615
        }
    }

    return (
        <div>
            <p>Objetos Literales</p>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 3)}
                </pre>
            </code>
        </div>
    )
}
