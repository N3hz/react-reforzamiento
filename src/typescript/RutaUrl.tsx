import React from 'react'
import {
   useParams
} from "react-router-dom";
  
interface ParamsRecibe{
    id? : string
}


export const RutaUrl = () => {

    const { id } = useParams<ParamsRecibe>();


    return (
        <div>
            <p>Parametros por URL</p>
            <br></br>
            <b><i>El parametro enviado es :</i> { id } </b>
        </div>
    )
}
