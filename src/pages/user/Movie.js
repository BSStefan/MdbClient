import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import MovieDetails from './../../components/MovieDetails';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';

import SideNavigation from '../../components/SideNavigation';
import LoadOneMovieRequest from './../../functions/ajax/LoadOneMovieRequest';
import UserLikeDislikeOneRequest from '../../functions/ajax/UserLikeDislikeOneRequest';
import WatchOrToBeWatchedRequest from '../../functions/ajax/WatchOrToBeWatchedRequest';
import MovieProjectionsRequest from '../../functions/ajax/MovieProjectionsRequest';

class Movie extends Component {

    componentWillMount() {
        const movieId = parseInt(this.props.match.params.id, 10);
        this.props.loadMovie(movieId);
    }
    componentWillUnmount() {
        this.props.destroyMovie();
        this.props.destroyProjections();
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

    handleFindLocation() {
        navigator.geolocation.getCurrentPosition(this.handleFindProjections.bind(this), this.handleFindProjections.bind(this));
    }

    handleFindProjections(location) {
        if(location.code === 1 || location.code === 2){
            this.props.loadProjections(this.props.movie.movie.details.id, 'Beograd');
        }
        else{
            let latitude  = location.coords.latitude;
            let longitude = location.coords.longitude;
            let city = this.findCity(latitude, longitude);
            this.props.loadProjections(this.props.movie.movie.details.id, city);
        }
    }

    findCity(latitude, longitude) {
        let citys =[
            {
                latitude: 44.786568,  //BG
                longitude: 20.448922
            },
            {
                latitude: 44.012793 , //KG
                longitude: 20.911423
            },
            {
                latitude: 43.320902, //NIS
                longitude: 21.895759
            }
        ];
        const distance = [];
        citys.map((city) => {
            distance.push(Math.sqrt(Math.pow((city.latitude-latitude),2)+Math.pow((city.longitude-longitude),2)));
        });
        if(distance[0]<distance[1] && distance[0]<distance[2]){
            return 'Beograd';
        }
        if(distance[1]<distance[0] && distance[1]<distance[2]){
            return 'Kragujevac';
        }
        return 'Nis';
    }

    destroyListProjections() {
        this.props.destroyProjections();
    }
    handleNewMovies(){}
    handleNewUserMovies(){}
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)} loadNewUserMovies={(t) => this.handleNewUserMovies(t)}/>
                    </Col>
                    <Col sm={10} className="movie-one">
                        <MovieDetails
                            details = {this.props.movie.movie}
                            userReaction = {this.props.movie.userReaction}
                            likeDislike = {(a, i) => this.handleLikeDislike(a, i)}
                            addTowWatchlist = {(i) => this.handleAddToWatchlist(i)}
                            addToWatched = {(i) => this.handleAddToWatched(i)}
                            findProjections = {()=> this.handleFindLocation()}
                            projections = {this.props.projections.projections}
                            destroyListProjections = {this.destroyListProjections.bind(this)}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movie : state.oneMovie,
        projections : state.projections
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
        loadProjections : (id, city) => {
            dispatch(MovieProjectionsRequest(id, city));
        },
        destroyMovie : () => {
            dispatch({
                type : 'DESTROY_ONE'
            });
        },
        destroyProjections : () => {
            dispatch({
                type : 'DESTROY_PROJECTIONS'
            });
        },

    }
};

Movie.propTypes={
    movie: PropTypes.object.isRequired,
    loadMovie: PropTypes.func.isRequired,
    likeDislike: PropTypes.func.isRequired,
    loadProjections : PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);

