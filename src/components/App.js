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
import MovieList from './../pages/user/MovieList';
import Person from './../pages/user/Person';
import AllGenres from './../pages/user/AllGenres';
import UserLists from './../pages/user/UserLists';
import AddMovies from './../pages/admin/AddMovies';
import AdminHome from './../pages/admin/AdminHome';
import AdminProjections from './../pages/admin/AdminProjections';
import PrivateComponent from './PrivateComponent';
import RegisterGuard from './RegisterGuard';
import PublicComponent from './PublicComponent';
import AdminGuard from './AdminGuard';


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
                          <PrivateComponent  isAuth={this.props.auth.isAuth} exact path="/" component={Dashboard}/>
                          <PublicComponent  isAuth={this.props.auth.isAuth} isAdmin={this.props.auth.user.is_admin} exact path="/login" component={Login}/>
                          <RegisterGuard    isAuth={this.props.auth.isAuth} isField={this.props.auth.movie} exact path="/register" component={Register}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/logout" component={Logout}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/home" component={Dashboard}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/movie/:id" component={Movie}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/liked-movies/:page" component={UserLists}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/watchlist/:page" component={UserLists}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/profile" component={Dashboard}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/start" component={NewUser}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/person/:role/:id" component={Person}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/most-liked/:page" component={MovieList}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/new-movies/:page" component={MovieList}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/current-in-cinema/:page" component={MovieList}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/per-genre/:genre_id/:page" component={MovieList}/>
                          <PrivateComponent isAuth={this.props.auth.isAuth} exact path="/all-genres" component={AllGenres}/>
                          <AdminGuard isAuth={this.props.auth.isAuth} isAdmin={this.props.auth.user.is_admin} is exact path="/admin/home" component={AdminHome}/>
                          <AdminGuard isAuth={this.props.auth.isAuth} isAdmin={this.props.auth.user.is_admin} is exact path="/admin/projections" component={AdminProjections}/>
                          <AdminGuard isAuth={this.props.auth.isAuth} isAdmin={this.props.auth.user.is_admin} is exact path="/admin/:type" component={AddMovies}/>
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

App.propTypes={
    auth: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
