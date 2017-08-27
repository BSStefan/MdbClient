import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './../pages/Login';
import Register from './../pages/Register';
import Navigation from './Navigation';
import { NotFound } from './../pages/NotFound';
import Dashboard from './../pages/user/Dashboard';
import Movie from '../pages/user/Movie';


class App extends Component {
    componentWillMount() {
        document.body.style.background = '#FFF';
    }
  render() {
      return (
          <div className="App">
              <BrowserRouter>
                  <section>
                      <Navigation/>
                      <Switch>
                          <Route exact path="/login" component={Login}/>
                          <Route exact path="/register" component={Register}/>
                          <Route exact path="/logout" component={Dashboard}/>
                          <Route exact path="/home" component={Dashboard}/>
                          <Route exact path="/movie/:id" component={Movie}/>
                          <Route exact path="/movies" component={Dashboard}/>
                          <Route exact path="/watchlist" component={Dashboard}/>
                          <Route exact path="/profile" component={Dashboard}/>
                          <Route component={NotFound}/>
                      </Switch>
                  </section>
              </BrowserRouter>
          </div>
    );
  }
}

export default App;
