
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

            //AQUI DEBERIA IR A LA BD A CONSULTAR POR EL USUARIO

            if(usuario===process.env.REACT_APP_USUARIO && password===process.env.REACT_APP_PASS){
                const resultadoValidacion = {
                    id: 64332,
                    name: process.env.REACT_APP_USUARIO 
                }
                resolve(resultadoValidacion);
            }else{
                reject("Error de login");
            }

        }, 3000);
    })
}