import React, { Component } from 'react';
import { Navbar,Nav,NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state={
            redirect : null,
            flag : false
        }
    }

    handleSelect(selectedKey) {
        let links = {
            1 : '/login',
            2 : '/register',
            3 : '/user/movies',
            4 : '/user/watchlist',
            5 : '/user/profile',
            6 : '/logout',
            7: '/home'
        };

        this.setState({
            ...this.state,
            redirect : links[selectedKey],
            flag : true
        });
    }
    handleSelected() {
        this.setState({
            ...this.state,
            flag : false
        });
    }


    render(){

        return(
            <nav>
                <Navbar default fixedTop fluid>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <LinkContainer to="/home">
                                <NavItem eventKey={7}>
                                    PersolnalMovieBook
                                </NavItem>
                            </LinkContainer>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <LinkContainer to="/login">
                                <NavItem eventKey={1}>
                                    Log In
                                </NavItem>
                            </LinkContainer>
                            <LinkContainer to="/register">
                                <NavItem eventKey={2} href="#">
                                    Register
                                </NavItem>
                            </LinkContainer>
                            <NavDropdown eventKey={0} title="User" id="basic-nav-dropdown">
                                <LinkContainer to="/user/movies">
                                    <MenuItem eventKey={3}>Your Movies</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/user/watchlist">
                                    <MenuItem eventKey={4}>Your Watchlist</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/user/profile">
                                    <MenuItem eventKey={5}>Your Profile</MenuItem>
                                </LinkContainer>
                            </NavDropdown>
                            <LinkContainer to="/logout">
                                <NavItem eventKey={6} href="#">
                                    Log Out
                                </NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </nav>

        );
    }
}