import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


class SideNavigation extends Component {
    render(){
        return (
            <aside>
                <h5><b>About movies</b></h5>
                <Nav bsStyle="pills" stacked activeKey={1} className="side-navigation">
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
                    <LinkContainer to="#">
                        <NavItem eventKey={4}>Current in cinema</NavItem>
                    </LinkContainer>
                </Nav>
            </aside>
        );
    }
}

export default SideNavigation;