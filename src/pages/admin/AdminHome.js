import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, ListGroup} from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import {NavLink} from 'react-router-dom';

import SideAdminNavigation from '../../components/SideAdminNavigation';


class AdminHome extends Component {

    // componentWillMount() {
    //     //this.props.loadGenres();
    // }
    // handleNewMovies(type) {
    //     //this.props.loadMovies(type, 1);
    // }
    handleNewMovies(t){

    }
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideAdminNavigation loadNewMovies={(t) => this.handleNewMovies(t)}/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        //Lista
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        //genres : state.genres
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // loadGenres : () => {
        //     dispatch(GenresRequest());
        // },
        // loadMovies : (type, page) => {
        //     dispatch(LoadMovieListRequest(type, 24, page));
        // },
    }
};

AdminHome.propTypes={
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);