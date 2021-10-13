import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { validationLoginCredencial } from '../actions/authAction';
import { useForms } from '../hooks/useForms';

export const ReduxForm = () => {

    const dispatch = useDispatch();

    const formUsuarios = useForms({
        usuario: '',
        password: ''
    });

    // @ts-ignore
    const { loading } = useSelector(state => state.ui)

    const {usuario,password,changeImput} = formUsuarios;

    const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(validationLoginCredencial(formUsuarios.usuario,formUsuarios.password));
    }

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                className="form-control inputFormulario"
                placeholder="Usuario"
                value={usuario}
                onChange={({ target }) => changeImput(target.value, 'usuario')}
                disabled={loading}
            />

            <input
                type="password"
                className="form-control inputFormulario"
                placeholder="Password"
                value={password}
                onChange={({ target }) => changeImput(target.value, 'password')}
                disabled={loading}
            />

            <button
                className="btn btn-sm btn-primary"
                type="submit"
                disabled={loading}
            >
                Login
            </button>
        </form> 
    )
}
