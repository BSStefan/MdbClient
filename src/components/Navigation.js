import React, { Component } from 'react';
import {Navbar,Nav,NavItem} from 'react-bootstrap';
import {NavLink, Redirect} from 'react-router-dom';

export default class Navigation extends Component{

    constructor(props) {
        super(props);
        this.state={
            redirect : null
        }
    }

    handleSelect(selectedKey) {
        let links = {
            1 : '/login',
            2 : '/register'
        };
        this.setState({
            ...this.state,
            redirect : links[selectedKey]
        });
    }

    render(){
        return(
            <nav>
                <Navbar default fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <NavLink exact to="/">
                                PersolnalMovieBook
                            </NavLink>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight onSelect={this.handleSelect.bind(this)}>
                            <NavItem eventKey={1} href="#">
                                Log In
                            </NavItem>
                            <NavItem eventKey={2} href="#">
                                Register
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {
                    this.state.redirect !== null && this.state.redirect !== window.location.pathname ?
                        <Redirect to={{
                            pathname: this.state.redirect,
                        }}/> : null
                }
            </nav>

        );
    }
}