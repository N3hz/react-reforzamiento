import React from 'react'

export const TiposBasicos = () => {

    const nombre:string = 'Daniel';
    const edad:number = 30;
    const activo:boolean = false;

    const arreglos: string[] = [];
    arreglos.push("Valor 1");
    arreglos.push("Valor 2");
    arreglos.push("Valor 3");

    return (
        <div>
            <p>Tipos Basicos</p>
            {`${nombre} , ${edad} , ${ ( activo ) ? 'activo' : 'inactivo' } `}
            <br/>
            {arreglos.join(', ')}
        </div>
    )
}
