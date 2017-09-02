import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import MovieDetails from './../../components/MovieDetails';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';

import SideNavigation from '../../components/SideNavigation';
import LoadOneMovieRequest from './../../functions/ajax/LoadOneMovieRequest';
import UserLikeDislikeOneRequest from '../../functions/ajax/UserLikeDislikeOneRequest';
import WatchOrToBeWatchedRequest from '../../functions/ajax/WatchOrToBeWatchedRequest';

class Movie extends Component {

    componentWillMount() {
        const movieId = parseInt(this.props.match.params.id, 10);
        this.props.loadMovie(movieId);
    }
    constructor(props) {
        super(props);
    }

    handleLikeDislike(action, id) {
        this.props.likeDislike(action, id);
    }

    handleAddToWatchlist(id) {
        this.props.watchedOrToBe(true, id);
    }

    handleAddToWatched(id) {
        this.props.watchedOrToBe(false, id);
    }

    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation/>
                    </Col>
                    <Col sm={10} className="movie-one">
                        <MovieDetails
                            details = {this.props.movie.movie}
                            userReaction = {this.props.movie.userReaction}
                            likeDislike = {(a, i) => this.handleLikeDislike(a, i)}
                            addTowWatchlist = {(i) => this.handleAddToWatchlist(i)}
                            addToWatched = {(i) => this.handleAddToWatched(i)}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie : state.oneMovie
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovie : (id) => {
            dispatch(LoadOneMovieRequest(id));
        },
        likeDislike : (action, id) => {
            dispatch(UserLikeDislikeOneRequest(action, id));
        },
        watchedOrToBe : (action, id) => {
            dispatch(WatchOrToBeWatchedRequest(action, id));
        },

    }
};

Movie.propTypes={
    movie: PropTypes.object.isRequired,
    loadMovie: PropTypes.func.isRequired,
    likeDislike: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

