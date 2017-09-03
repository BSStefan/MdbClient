import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import PropTypes from 'prop-types';

class SideNavigation extends Component {
    render(){
        return (
            <aside>
                <h5><b>About movies</b></h5>
                <Nav bsStyle="pills" stacked activeKey={1} className="side-navigation">
                    <LinkContainer to="/recommendation/1" onClick={() => this.props.loadNewMovies('recommendation')}>
                        <NavItem eventKey={1}>Recommendation</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/new-movies/1" onClick={() => this.props.loadNewMovies('new-movies')}>
                        <NavItem eventKey={2}>New movies</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/most-liked/1" onClick={() => this.props.loadNewMovies('most-liked')}>
                        <NavItem eventKey={3}>Most popular movies</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/all-genres">
                        <NavItem eventKey={4}>Genres</NavItem>
                    </LinkContainer>
                    <LinkContainer to="/current-in-cinema/1" onClick={() => this.props.loadNewMovies('current-in-cinema')}>
                        <NavItem eventKey={4}>Current in cinema</NavItem>
                    </LinkContainer>
                </Nav>
            </aside>
        );
    }
}

SideNavigation.propTypes={
    loadNewMovies: PropTypes.func.isRequired
};

export default SideNavigation;