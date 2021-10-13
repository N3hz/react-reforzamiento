
import { types } from '../types/authTypes';
import { startlogin ,finishlogin } from './uiAction';


export const validationLoginCredencial = (usuario, password) => {
    return (dispatch) => {

        dispatch(startlogin())
    
        loginValidation(usuario,password)
            .then((loginPerson) => {
                dispatch( login(loginPerson.id,loginPerson.name) );
                dispatch( finishlogin() );
            })
            .catch(()=>{
                dispatch( loginError() );
                dispatch( finishlogin() );
            })
    }
}

export const validationLogout = () => {
    return (dispatch) => {
        dispatch(logout());
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const loginError = () => ({
    type: types.loginError,
    payload: null
});


export const logout = () => ({
    type: types.logout,
    payload: null
});


const loginValidation = async (usuario, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(usuario==="Daniel" && password==="123456"){
                const resultadoValidacion = {
                    id: 64332,
                    name: 'Daniel'
                }
                resolve(resultadoValidacion);
            }else{
                reject("Error de login");
            }
        }, 3000);
    })
}