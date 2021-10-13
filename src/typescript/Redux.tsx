import React from 'react'
import { useSelector } from 'react-redux'
import { ReduxForm } from './ReduxForm';
import { ReduxFormLogin } from './ReduxFormLogin';
import { ReduxMessage } from './ReduxMessage';

export const Redux = () => {

    // @ts-ignore
    const { ucode } = useSelector(state => state.auth)

    return (
        <div>
            <p>Redux</p>
            <b>Commando : </b> <p>npm install react-redux redux</p>
            <b>Commando Typescript: </b> <p>npm i --save-dev @types/react-redux</p>
            <b>Commando (Permite hacer dispatch dentro de los reducer): </b> <p>npm install --save redux-thunk</p>

            {
                (ucode === 0 || ucode === 300 || ucode === 400) ?
                    <ReduxForm />
                    : <></>
            }

            {
                (ucode === 300 || ucode === 400) ?
                    <>
                        <br />
                        <ReduxMessage />
                    </> : <></>
            }

            {
                (ucode === 200) ?
                    <>
                        <br />
                        <ReduxMessage />
                        <br />
                        <ReduxFormLogin />
                    </> : <></>
            }

        </div>
    )
}
