import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AdminGuard ({component: Component, isAuth, isAdmin, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => (isAuth === true && isAdmin === 1)
                ? <Component {...props} />
                : <Redirect to={{pathname: '/home', state: {from: props.location}}} />}
        />
    )
}
