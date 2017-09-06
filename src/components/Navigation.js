import React, { Component } from 'react';
import { Navbar,Nav,NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Navigation extends Component{
    render(){
        return(
            <nav>
                <Navbar default fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {
                                this.props.auth.user.is_admin === 1 ?
                                    <LinkContainer to="/admin/home">
                                        <NavItem eventKey={7}>
                                            PersolnalMovieBook
                                        </NavItem>
                                    </LinkContainer>
                                    :
                                    <LinkContainer to="/home">
                                        <NavItem eventKey={7}>
                                            PersolnalMovieBook
                                        </NavItem>
                                    </LinkContainer>
                            }

                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            {
                                this.props.auth.isAuth ? null :
                                    <LinkContainer to="/login">
                                        <NavItem eventKey={1}>
                                            Log In
                                        </NavItem>
                                    </LinkContainer>
                            }
                            {
                                this.props.auth.isAuth ? null :
                                    <LinkContainer to="/register">
                                        <NavItem eventKey={2} href="#">
                                            Register
                                        </NavItem>
                                    </LinkContainer>
                            }
                            {/*{*/}
                                {/*this.props.auth.isAuth ?*/}
                                    {/*<NavDropdown eventKey={0} title="User" id="basic-nav-dropdown">*/}
                                        {/*<LinkContainer to="/liked-movies/1">*/}
                                        {/*<MenuItem eventKey={3}>Your Movies</MenuItem>*/}
                                        {/*</LinkContainer>*/}
                                        {/*<LinkContainer to="/watchlist/1">*/}
                                        {/*<MenuItem eventKey={4}>Your Watchlist</MenuItem>*/}
                                        {/*</LinkContainer>*/}
                                        {/*/!*<LinkContainer to="/profile">*!/*/}
                                        {/*/!*<MenuItem eventKey={5}>Your Profile</MenuItem>*!/*/}
                                        {/*/!*</LinkContainer>*!/*/}
                                    {/*</NavDropdown>*/}
                                    {/*: null*/}
                            {/*}*/}
                            {
                                this.props.auth.isAuth ?
                                    <LinkContainer to="/logout">
                                        <NavItem eventKey={6} href="#">
                                            Log Out
                                        </NavItem>
                                    </LinkContainer>
                                    : null
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>

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

Navigation.propTypes={
    auth : PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);

