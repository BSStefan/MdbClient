import React, { Component } from 'react';
import { Grid, Row, Col, Pager, Button, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';


import LoadMovieListRequest from '../../functions/ajax/LoadMovieListRequest';
import SmallMovieList from './../../components/SmallMovieList';
import SideNavigation from './../../components/SideNavigation';

class MovieList extends Component {
    componentWillMount() {
        let page = parseInt(this.props.match.params.page, 10);
        let type = this.getType();
        if(this.props.listMovies[this.findMovies()[0]].length === 0){
            if(type === 'per-genre'){
                this.props.loadMovies(type, page, this.props.match.params.genre_id);
            }
            else{
                this.props.loadMovies(type, page);
            }
        }
    };
    componentWillUnmount() {
        this.props.destroyListMovies();
        if(this.props.error !== '') {
            this.props.destroyError();
        }
    }
    getType(){
        return window.location.pathname.split('/')[1];
    }
    findMovies(){
        switch (this.getType()) {
            case 'new-movies':
                return ['newMovies', 'New Movies'];
            case 'most-liked':
                return ['mostPopular', 'Most Liked'];
            case 'recommendation':
                return ['recommendation', 'Recommendation'];
            case 'current-in-cinema':
                return ['currentInCinema', 'Current In Cinema'];
            case 'per-genre':
                return ['perGenre', 'Per Genre']
        }
    }
    handleRedirect(page) {
        let type = this.getType();
        if(type === 'per-genre'){
            this.props.loadMovies(this.getType(), page, this.props.match.params.genre_id);
        }
        else{
            this.props.loadMovies(type, page);
        }
        if(this.props.error !== '') {
            this.props.destroyError();
        }
    }
    handleNewMovies(type) {
        this.props.loadMovies(type, 1);
        if(this.props.error !== '') {
            this.props.destroyError();
        }
    }
    makeNewLinks(){
        let page = parseInt(this.props.match.params.page, 10);
        let type = this.getType();
        if(type === 'per-genre'){
            type = type + '/' + this.props.match.params.genre_id;
        }
        let prev = '/'+type+'/'+(page-1);
        let next = '/'+type+'/'+(page+1);
        return [prev,next];
    }
    makeNewPage(){
        let page = parseInt(this.props.match.params.page, 10);
        let prev = (page-1);
        let next = (page+1);
        return [prev,next];
    }
    handleNewUserMovies() {}
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)} loadNewUserMovies={(t) => this.handleNewUserMovies(t)}/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        <Col sm={12}>
                            <h3><b>{this.findMovies()[1]}</b></h3>
                        </Col>
                        {this.props.error !== '' ?
                            <Col sm={12}><Alert className="text-center" bsStyle="danger">{this.props.error}</Alert></Col>
                            : null
                        }
                        <SmallMovieList movies={this.props.listMovies[this.findMovies()[0]]} filter={this.findMovies()[0]} />
                    </Col>
                </Row>
                <Pager>
                    {
                        this.props.listMovies.pagination.previous_page ?
                            <NavLink exact to={this.makeNewLinks()[0]} onClick={() => this.handleRedirect(this.makeNewPage()[0])}>Previous</NavLink>
                            :
                            null
                    }
                    {' '}
                    {
                        this.props.listMovies.pagination.next_page ?
                            <NavLink to={this.makeNewLinks()[1]} onClick={()=>this.handleRedirect(this.makeNewPage()[1])}>Next</NavLink>
                            :
                            null
                    }
                </Pager>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listMovies : state.listMovies,
        error: state.error.error
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies : (type, page, genreId=0) => {
            dispatch(LoadMovieListRequest(type, 24, page, genreId));
        },
        destroyListMovies : () => {
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

MovieList.propTypes={
    listMovies: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
