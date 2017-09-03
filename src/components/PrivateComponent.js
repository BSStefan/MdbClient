import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PrivateComponent ({component: Component, isAuth, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => isAuth === true
                ? <Component {...props}  />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
        />
    )
}

