import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import jwtDecode from 'jwt-decode';

import { AuthReducer } from './reducers/AuthReducer';
import './css/index.css';
import App from './components/App';

const store=createStore(
    combineReducers({ auth: AuthReducer}),
    {},
    compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root')
);

