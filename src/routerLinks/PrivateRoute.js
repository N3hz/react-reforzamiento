import React from 'react'
import {
    Route,
    Redirect
} from "react-router-dom";

export const PrivateRoute = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={ (props) => (
                (isAutenticated===200) ? <Component {...props} /> : <Redirect to="/reduxLogin" />
            )}
        />
    )
}