
import { types } from '../types/authTypes';
import { startlogin ,finishlogin } from './ui';


export const validationLoginCredencial = (usuario, password) => {
    return (dispatch) => {

        dispatch(startlogin())
    
        setTimeout(()=>{
            dispatch( login(64332,'Daniel') );

            dispatch(finishlogin())
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
