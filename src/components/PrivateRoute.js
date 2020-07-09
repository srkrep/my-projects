import React from 'react';
import { Route, Redirect } from "react-router-dom";
import Auth from './Auth';  

const PrivateRoute = ({auth, component:Component, ...rest}) => {
    return(
        <Route
        {...rest}
        render = {
            props => Auth.isAuthenticated ?
            (<Component {...props}/>) : (<Redirect to={{ pathname: "/signup" }}/>)
        }
        />
    )
}

export default PrivateRoute