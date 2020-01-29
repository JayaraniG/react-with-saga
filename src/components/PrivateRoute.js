import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const isloggedin=!!localStorage.getItem("token")   
console.log(isloggedin);

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        isloggedin ? (<Component {...props} />)
            :(<Redirect to={{ pathname: '/', state: { from: props.location } }} />)
    )} />
)