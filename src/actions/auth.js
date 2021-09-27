
import { types } from '../types/authTypes';

export const validationLoginCredencial = (usuario, password) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch( login(64332,'Daniel') );
        },4000);
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});
