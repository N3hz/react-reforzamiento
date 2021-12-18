import { useReducer, useEffect, useRef } from 'react'

interface AuthState {
    validando: boolean,
    token: number | null,
    nombre: string | null
}

const inicialState: AuthState = {
    validando: true,
    token: null,
    nombre: null
}

interface AuthAction {
    type: AuthTypes,
    payload: AuthState | null
}

enum AuthTypes {
    'logout',
    'login'
}

const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    const { type, payload } = action;

    switch (type) {
        case AuthTypes.logout:
            return {
                ...inicialState,
                validando: false
            };
        case AuthTypes.login:
            return payload ?? state;
        default:
            return state;
    }

}


const inicialStateTest: TestState = {
    numero: 30
}

interface TestState {
    numero: number
}

interface TestAction {
    accion: string,
    payload: TestState
}

const testReducer = (state: TestState, action: TestAction): TestState => {

    const { accion , payload } = action;

    switch (accion) {
        case 'sumar':
            return {
                numero: (payload.numero + 1)
            };
        case 'restar':
            return {
                numero: (payload.numero - 1)
            };
        default:
            return state;
    }
}


export const Reducer = () => {
    const mountedRef = useRef(true);
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, inicialState);
    const [{ numero : numeroVista }, dispatchReducer] = useReducer(testReducer, inicialStateTest);

    const login = () => {

        const loginPerson: AuthState = {
            validando: false,
            token: 5526,
            nombre: 'Daniel G'
        }

        const authValor: AuthAction = {
            type: AuthTypes.login,
            payload: loginPerson
        }

        dispatch(authValor)
    }
    const logout = () => {

        const authValor: AuthAction = {
            type: AuthTypes.logout,
            payload: null
        }

        dispatch(authValor)
    }

    useEffect(() => {
        mountedRef.current = true;

        const authValor: AuthAction = {
            type: AuthTypes.logout,
            payload: null
        }

        setTimeout(() => {
            if (mountedRef.current) {
                dispatch(authValor)
            }
        }, 2000);

        return () => {
            mountedRef.current = false;
        }

    }, [])


    if (validando) {
        return (
            <>
                <p>Reducer</p>
                <hr />
                <b>Login</b>
                <br /><br />
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

    return (
        <div>
            <p>Reducer</p>
            <hr />
            <b>Login</b>
            <br /><br />

            {
                (token)
                    ? (
                        <>
                            <div className="alert alert-success">Autenticado como: {nombre}</div>
                            <button className="btn btn-danger" onClick={logout}>
                                Logout
                            </button>

                            <button
                                className="btn btn-primary" 
                                style={{ marginLeft :10 }}
                                onClick={
                                    () => {

                                        const valorAnt: TestState = {
                                            numero : numeroVista
                                        }


                                        const sumando: TestAction = {
                                            accion: 'sumar',
                                            payload: valorAnt
                                        }

                                        dispatchReducer(sumando)
                                    }
                                }
                            >
                                Sumar
                            </button>

                            <button
                                className="btn btn-primary" 
                                style={{ marginLeft :10 }}
                                onClick={
                                    () => {

                                        const valorAnt: TestState = {
                                            numero : numeroVista
                                        }


                                        const restando: TestAction = {
                                            accion: 'restar',
                                            payload: valorAnt
                                        }

                                        dispatchReducer(restando)
                                    }
                                }
                            >
                                Restar
                            </button>

                            <b style={{ marginLeft :10 }} >Valor : {numeroVista}</b>
                        </>
                    )
                    : (
                        <>
                            <div className="alert alert-danger">No autenticado</div>
                            <button className="btn btn-primary" onClick={login}>
                                Login
                            </button>
                        </>
                    )
            }


        </div>
    )
}
