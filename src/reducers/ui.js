import { types } from '../types/authTypes';

export const uiReducer = ( state = {  }, action ) => {
    switch ( action.type ) {
        case types.uiStartLoading:
            return {
                loading : true
            }
        case types.uiFinishLoading:
            return {
                loading : false
            }
        default:
            return state;
    }

}