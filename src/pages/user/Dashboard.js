import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoadMovieList from './../../functions/ajax/LoadMovieList';
import SmallMovieList from './../../components/SmallMovieList';
import SideNavigation from './../../components/SideNavigation';

class Dashboard extends Component {
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        <Col sm={12}>
                            <h3><b>Recommendation</b></h3>
                        </Col>
                        <SmallMovieList/>
                        <Col sm={12}>
                            <h3><b>New movies</b></h3>
                        </Col>
                        <SmallMovieList/>
                        <Col sm={12}>
                            <h3><b>Most popular</b></h3>
                        </Col>
                        <SmallMovieList/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listMovies : state.listMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadRecommendation : () => {
            dispatch(LoadMovieList('recommendation', 12));
        },
        loadNew : () => {
            dispatch(LoadMovieList('new-movies', 12));
        },
        loadMostPopular : () => {
            dispatch(LoadMovieList('most-liked', 12));
        }
    }
};

Dashboard.propTypes={
    listMovies: PropTypes.object.isRequired,
    loadRecommendation: PropTypes.func.isRequired,
    loadNew: PropTypes.func.isRequired,
    loadMostPopular: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
