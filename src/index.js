import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import { AuthReducer } from './reducers/AuthReducer';
import { MovieListReducer } from './reducers/MovieListReducer'
import './css/index.css';
import App from './components/App';
import setTokenInRequest from './functions/setTokenInRequest';
import LogOut from './functions/LogOut';

const store=createStore(
    combineReducers({ auth: AuthReducer, listMovies: MovieListReducer }),
    {},
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));

if(localStorage.getItem('jwtToken')) {
    setTokenInRequest(localStorage.getItem('jwtToken'));
    let expTime = (jwtDecode(localStorage.getItem('jwtToken')).exp) * 1000;
    let currentTime = new Date().getTime();
    if(expTime > currentTime) {
        store.dispatch({
            type : 'LOGIN',
            payload : {
                'token' : localStorage.getItem('jwtToken'),
                'first_name' : localStorage.getItem('name').split("/")[0],
                'last_name' : localStorage.getItem('name').split("/")[0]
            }
        });
    }
    else {
        store.dispatch(LogOut);
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

