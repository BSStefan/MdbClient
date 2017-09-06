import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

class SideAdminNavigation extends Component {
    render(){
        return (
            <aside>
                <h5><b>About movies</b></h5>
                <Nav bsStyle="pills" stacked activeKey={1} className="side-navigation">
                    <LinkContainer to="/admin/new-movies" onClick={() => this.props.loadNewMovies('new-movies')}>
                        <NavItem eventKey={1}>New movies</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/admin/popular-movies" onClick={() => this.props.loadNewMovies('popular-movies')}>
                        <NavItem eventKey={2}>Most popular movies</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/admin/current-in-cinema" onClick={() => this.props.loadNewMovies('current-in-cinema')}>
                        <NavItem eventKey={3}>Current in Cinema</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/admin/projections">
                        <NavItem eventKey={3}>Projections</NavItem>
                    </LinkContainer>
                </Nav>
            </aside>
        );
    }
}

SideAdminNavigation.propTypes={
    loadNewMovies: PropTypes.func.isRequired
};

export default SideAdminNavigation;
