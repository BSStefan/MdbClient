import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './../pages/Login';
import Register from './../pages/Register';

class App extends Component {
  render() {
      return (
          <div className="App">
              <BrowserRouter>
                  <div className="container">
                      <Switch>
                          <Route exact path="/login" component={Login}/>
                          <Route exact path="/register" component={Register}/>
                          <Route render={() => {
                              return <h1>Page Not found</h1>
                          }}/>
                      </Switch>
                  </div>
              </BrowserRouter>
          </div>
    );
  }
}

export default App;
