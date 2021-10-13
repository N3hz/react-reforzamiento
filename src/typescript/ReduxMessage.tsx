import React from 'react'
import { useSelector } from 'react-redux'

export const ReduxMessage = () => {
    // @ts-ignore
    const { ucode,name,badge,message } = useSelector(state => state.auth)

    return (
        <div>
            <span className={badge}>
                {
                    (ucode) === 200 ? `Bienvenido ${name}!`: message
                }
            </span>
        </div>
    )
}
