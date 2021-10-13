import { typesUI } from '../types/authTypes';

export const startlogin = () => ({
    type: typesUI.uiStartLoading,
    payload: null
});

export const finishlogin = () => ({
    type: typesUI.uiFinishLoading,
    payload: null
});
