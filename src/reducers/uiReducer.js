import { typesUI } from '../types/authTypes';

const inicialState = {
    loading : false
}

export const uiReducer = ( state = inicialState, action ) => {
    switch ( action.type ) {
        case typesUI.uiStartLoading:
            return {
                loading : true
            }
        case typesUI.uiFinishLoading:
            return {
                loading : false
            }
        default:
            return state;
    }

}