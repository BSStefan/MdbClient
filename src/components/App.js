import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import Login from './../pages/Login';
import Register from './../pages/Register';
import Navigation from './Navigation';
import NotFound from './../pages/NotFound';
import Dashboard from './../pages/user/Dashboard';
import Movie from './../pages/user/Movie';
import NewUser from './../pages/user/NewUser';
import Logout from './../pages/Logout';
import PrivateComponent from './PrivateComponent'
import PublicComponent from './PublicComponent'


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
                          <PublicComponent isAuth={this.props.auth.isAuth} exact path="/login" component={Login}/>
                          <PublicComponent isAuth={this.props.auth.isAuth} exact path="/register" component={Register}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/logout" component={Logout}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/home" component={Dashboard}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/movie/:id" component={Movie}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/movies" component={Dashboard}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/watchlist" component={Dashboard}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/profile" component={Dashboard}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/start" component={NewUser}/>
                          <Route component={NotFound}/>
                      </Switch>
                  </section>
              </BrowserRouter>
          </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

Register.propTypes={
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
