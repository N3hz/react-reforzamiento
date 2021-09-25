import { useState, useMemo } from 'react'
import { useCounter } from '../hooks/useCounter';
import { RandomImage } from './RandomImage'

export const Memo = () => {

    const { numero, sumando } = useCounter(10);
    const [verdaderoFalso, setverdaderoFalso] = useState(true);

    const procesoPruebas = (  ) => {    
       for (let index = 0; index < 3; index++) {
           console.log('Iteracion : ' + index);
       } 
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useMemo ( () => procesoPruebas(), [numero] );

    return (
        <div>
            <p>Memorize</p>
            <i style={{ fontSize: 10}}>Es necesario observar la consola para ver las llamadas</i>
            <br /><br/>

            <div className="row">
                <RandomImage />
            </div>
            <br />



            <button
                className="btn btn-primary"
                onClick={() => {
                    setverdaderoFalso(!verdaderoFalso)
                }}
            >
                {JSON.stringify(verdaderoFalso)}
            </button>

            <button
                style={{ marginLeft: 10 }}
                className="btn btn-primary"
                onClick={() => {
                    sumando(1)
                }}
            >
                {numero}
            </button>
        </div>
    )
}
