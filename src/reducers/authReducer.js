import { types } from '../types/authTypes';

const inicialState = {
    uid: 0,
    ucode: 0,
    name : '',
    badge: '',
    message : ''
}

export const authReducer = ( state = inicialState, action ) => {

    switch ( action.type ) {
        case types.login:
            return {
                uid: action.payload.uid,
                ucode: 200,
                name: action.payload.displayName,
                badge:'badge bg-success',
                message : 'Login Correcto'
            }

        case types.logout:
            return { 
                uid: 0,
                ucode: 400,
                name : '',
                badge:'badge bg-secondary',
                message : 'Logout'
            }

        case types.loginError:
            return { 
                uid: 0,
                ucode: 300,
                name : '',
                badge:'badge bg-danger',
                message : 'Fallo el login'
            }
        default:
            return state;
    }

}