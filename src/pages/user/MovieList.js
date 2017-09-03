import React, { Component } from 'react';
import { Grid, Row, Col, Pager, Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink} from 'react-router-dom';


import LoadMovieListRequest from '../../functions/ajax/LoadMovieListRequest';
import SmallMovieList from './../../components/SmallMovieList';
import SideNavigation from './../../components/SideNavigation';

class MovieList extends Component {
    componentWillMount() {
        let page = parseInt(this.props.match.params.page, 10);
        this.props.loadMovies(this.getType(), page);
    };
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
                return ['currentInCinema', 'Current In Cinema']
        }
    }
    handleRedirect(page) {
        this.props.loadMovies(this.getType(), page);
    }
    handleNewMovies(type) {
        this.props.loadMovies(type, 1);
    }
    makeNewLinks(){
        let page = parseInt(this.props.match.params.page, 10);
        let prev = '';
        let next = '';
        let type = this.getType();
        prev = '/'+type+'/'+(page-1);
        next = '/'+type+'/'+(page+1);
        return [prev,next];
    }
    makeNewPage(){
        let page = parseInt(this.props.match.params.page, 10);
        let prev = '';
        let next = '';
        prev = (page-1);
        next = (page+1);
        return [prev,next];
    }
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)}/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        <Col sm={12}>
                            <h3><b>{this.findMovies()[1]}</b></h3>
                        </Col>
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
        listMovies : state.listMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies : (type, page) => {
            dispatch(LoadMovieListRequest(type, 24, page));
        },
    }
};

MovieList.propTypes={
    listMovies: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
