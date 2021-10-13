import React from 'react'
import { useDispatch } from 'react-redux';
import { validationLogout } from '../actions/authAction';
import { Link } from "react-router-dom";

export const ReduxFormLogin = () => {
    const dispatch = useDispatch();

    const hadleLogout = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(validationLogout());
    }

    return (
        <>
        <p><Link to="/rutaProtegida">Ir a Ruta Protegida</Link></p>
        <form onSubmit={hadleLogout}>
            <button
                className="btn btn-sm btn-danger"
                type="submit"
            >
                Logout
            </button>
        </form>
        </>
    )
}
