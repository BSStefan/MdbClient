import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default  function PublicComponent ({component: Component, isAuth, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => isAuth !== true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/home', state: {from: props.location}}} />}
        />
    )
}