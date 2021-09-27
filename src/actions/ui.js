import { types } from '../types/authTypes';

export const startlogin = () => ({
    type: types.uiStartLoading,
    payload: null
});

export const finishlogin = () => ({
    type: types.uiFinishLoading,
    payload: null
});
