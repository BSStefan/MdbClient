import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicComponent ({component: Component, isAuth, isAdmin, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => isAuth !== true ? <Component {...props} /> : isAdmin === 1 ? <Redirect to={{pathname: '/admin/home', state: {from: props.location}}} /> : <Redirect to={{pathname: '/home', state: {from: props.location}}} />}
                //: isAdmin ? <Redirect to={{pathname: '/admin/home', state: {from: props.location}}} />

        />
    )
}