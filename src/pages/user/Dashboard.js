import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import LoadMovieListRequest from '../../functions/ajax/LoadMovieListRequest';
import SmallMovieList from './../../components/SmallMovieList';
import SideNavigation from './../../components/SideNavigation';

class Dashboard extends Component {
    componentWillMount() {
         this.props.loadNew();
         this.props.loadMostPopular();
    };
    handleNewMovies(type) {
        this.props.loadMovies(type, 1);
    }

    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)} />
                    </Col>
                    <Col sm={10} className="movie-small-list">
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
        listMovies : state.listMovies
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
