import React from 'react'
import { useDispatch } from 'react-redux';
import { validationLogout } from '../actions/authAction';

export const ReduxFormLogin = () => {
    const dispatch = useDispatch();

    const hadleLogout = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(validationLogout());
    }

    return (
        <form onSubmit={hadleLogout}>
            <button
                className="btn btn-sm btn-danger"
                type="submit"
            >
                Logout
            </button>
        </form>
    )
}
