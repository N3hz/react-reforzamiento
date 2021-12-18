import React from 'react'
import '../css/formulario.css'
import { useForms } from '../hooks/useForms';

export const Formularios = () => {

    const { usuario , password,  changeImput, formularioFull} = useForms({
        usuario : '',
        password : ''
    });
    
    return (
        <div>
             <p>Formularios</p>
             <br/>
             
             <input
                type="text"
                className="form-control inputFormulario"
                placeholder="Usuario"
                value={usuario}
                onChange={ ( { target }) => changeImput( target.value , 'usuario') }
             />

              <input
                type="password"
                className="form-control inputFormulario"
                placeholder="Password"
                value={password}
                onChange={ ( { target }) => changeImput( target.value , 'password') }
             />


            <code>
                <pre>
                    { JSON.stringify(formularioFull ,null,3) }
                </pre>
            </code>

        </div>
    )
}