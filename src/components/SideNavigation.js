import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class SideNavigation extends Component {
    render(){
        return (
            <Nav bsStyle="pills" stacked activeKey={1}>
                <LinkContainer to="#">
                    <NavItem eventKey={1}>Recommendation</NavItem>
                </LinkContainer>
                <LinkContainer to="#">
                    <NavItem eventKey={2}>New movies</NavItem>
                </LinkContainer>
                <LinkContainer to="#">
                    <NavItem eventKey={3}>Most popular movies</NavItem>
                </LinkContainer>
                <LinkContainer to="#">
                    <NavItem eventKey={4}>Genres</NavItem>
                </LinkContainer>
            </Nav>
        );
    }
}

export default SideNavigation;