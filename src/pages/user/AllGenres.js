import React, { Component } from 'react';
import { Grid, Row, Col, ListGroupItem, ListGroup} from 'react-bootstrap';
import PersonDetails from './../../components/PersonDetails';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import LoadMovieListRequest from '../../functions/ajax/LoadMovieListRequest';
import {NavLink} from 'react-router-dom';

import SideNavigation from '../../components/SideNavigation';
import GenresRequest from '../../functions/ajax/GenresRequest';

class AllGenres extends Component {

    componentWillMount() {
        this.props.loadGenres();
    }
    handleNewMovies(type) {
        this.props.loadMovies(type, 1);
    }
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)}/>
                    </Col>
                    <Col sm={6} smOffset={2} className="movie-one">
                        <ListGroup>
                        {this.props.genres.genres.map((genre) =>
                            <ListGroupItem key={genre['id']}>
                                <NavLink to={"/per-genre/"+genre['id']+"/1"}>
                                    {genre['name']}
                                </NavLink>
                            </ListGroupItem>)
                        }
                        </ListGroup>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        genres : state.genres
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadGenres : () => {
            dispatch(GenresRequest());
        },
        loadMovies : (type, page) => {
            dispatch(LoadMovieListRequest(type, 24, page));
        },
    }
};

AllGenres.propTypes={
    genres: PropTypes.object.isRequired,
    loadGenres: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllGenres);
