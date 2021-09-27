import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validationLoginCredencial } from '../actions/auth';
import { useForms } from '../hooks/useForms';


export const Redux = () => {

    const dispatch = useDispatch();

    // @ts-ignore
    const { loading } = useSelector(state => state.ui)

    const { usuario, password, changeImput } = useForms({
        usuario: '',
        password: ''
    });


    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch( validationLoginCredencial(usuario,password) );
    }
    

    return (
        <div>
            <p>Redux</p>
            <b>Commando : </b> <p>npm install react-redux redux</p>
            <b>Commando Typescript: </b> <p>npm i --save-dev @types/react-redux</p>
            <b>Commando (Permite hacer dispatch dentro de los reducer): </b> <p>npm install --save redux-thunk</p>

            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    className="form-control inputFormulario"
                    placeholder="Usuario"
                    value={usuario}
                    onChange={({ target }) => changeImput(target.value, 'usuario')}
                />

                <input
                    type="password"
                    className="form-control inputFormulario"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) => changeImput(target.value, 'password')}
                />

                <button
                    className="btn btn-primary"
                    type="submit"
                    disabled={loading}
                >
                    Login
                </button>
            </form>
        </div>
    )
}
