import React, { Component } from 'react';
import { Grid, Row, Col, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoadMovieListRequest from '../../functions/ajax/LoadMovieListRequest';
import SmallMovieList from './../../components/SmallMovieList';
import SideNavigation from './../../components/SideNavigation';

class Dashboard extends Component {
    componentWillMount() {
         this.props.loadNew();
         this.props.loadMostPopular();
         this.props.loadRecommendation();
    };
    componentWillUnmount() {
        this.props.destroyDashboardInfo();
    }
    handleNewMovies(type) {
        //this.props.loadMovies(type, 1);
    }
    handleNewUserMovies(type) {}

    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)} loadNewUserMovies={(t) => this.handleNewUserMovies(t)} />
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        {this.props.error !== '' ?
                            <Col sm={12}><Alert className="text-center" bsStyle="danger">{this.props.error}</Alert></Col>
                            : null
                        }
                        <Col sm={12}>
                            <h3><b>Recommendation</b></h3>
                        </Col>
                        <SmallMovieList movies={this.props.listMovies.recommendation} filter="recommendation" />
                        <Col sm={12}>
                            <h3><b>New movies</b></h3>
                        </Col>
                        <SmallMovieList movies={this.props.listMovies.newMovies} filter="newMovies" />
                        <Col sm={12}>
                            <h3><b>Most popular</b></h3>
                        </Col>
                        <SmallMovieList movies={this.props.listMovies.mostPopular} filter="mostPopular" />
                    </Col>
                </Row>
            </Grid>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        listMovies : state.listMovies,
        error : state.error.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies : (type, page) => {
            dispatch(LoadMovieListRequest(type, 24, page));
        },
        loadRecommendation : () => {
            dispatch(LoadMovieListRequest('recommendation', 12));
        },
        loadNew : () => {
            dispatch(LoadMovieListRequest('new-movies', 12));
        },
        loadMostPopular : () => {
            dispatch(LoadMovieListRequest('most-liked', 12));
        },
        destroyDashboardInfo : () => {
            dispatch({
                type : 'DESTROY_DASHBOARD_INFO'
            });
        },
        destroyError : () => {
            dispatch({
                type: 'DESTROY_GLOBAL_ERROR'
            });
        },
    }
};

Dashboard.propTypes={
    listMovies: PropTypes.object.isRequired,
    loadRecommendation: PropTypes.func.isRequired,
    loadNew: PropTypes.func.isRequired,
    loadMostPopular: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
