import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function RegisterGuard ({component: Component, isAuth, isField, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => (isAuth !== true && isField !== true)
                ? <Component {...props} />
                : <Redirect to={{pathname: '/start', state: {from: props.location}}} />}
        />
    )
}
