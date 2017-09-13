import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import { AuthReducer } from './reducers/AuthReducer';
import { MovieListReducer } from './reducers/MovieListReducer';
import { MovieOneReducer } from './reducers/MovieOneReducer';
import { PersonReducer } from './reducers/PersonReducer';
import { GenresReducer } from './reducers/GenresReducer';
import { UserMoviesReducer } from './reducers/UserMoviesReducer';
import { MovieProjections } from './reducers/MovieProjections';
import  { AdminAddMoviesReducer } from './reducers/AdminAddMoviesReducer';
import  { ErrorReducer } from './reducers/ErrorReducer';
import './css/index.css';
import App from './components/App';
import setTokenInRequest from './functions/setTokenInRequest';
import LogOut from './functions/LogOut';

const store=createStore(
    combineReducers({
        auth: AuthReducer,
        listMovies: MovieListReducer,
        oneMovie : MovieOneReducer,
        person : PersonReducer,
        genres : GenresReducer,
        userMovieList : UserMoviesReducer,
        projections : MovieProjections,
        adminMovies : AdminAddMoviesReducer,
        error : ErrorReducer
    }),
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
                'last_name' : localStorage.getItem('name').split("/")[1],
                'is_admin' : parseInt(localStorage.getItem('name').split("/")[2], 10)
            }
        });
    }
    else {
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('name');
        store.dispatch(LogOut);
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

