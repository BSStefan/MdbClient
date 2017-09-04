import React, { Component } from 'react';
import { Grid, Row, Col, Pager, ListGroupItem, ListGroup} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


import LoadMovieUserListRequest from '../../functions/ajax/LoadMovieUserListRequest';
import SideNavigation from './../../components/SideNavigation';

class UserLists extends Component {
    componentWillMount() {
        let page = parseInt(this.props.match.params.page, 10);
        let type = this.getType();
        this.props.loadUserMovies(this.getType(), page);

    };
    getType(){
        return window.location.pathname.split('/')[1];
    }
    // findMovies(){
    //     switch (this.getType()) {
    //         case 'new-movies':
    //             return ['newMovies', 'New Movies'];
    //         case 'most-liked':
    //             return ['mostPopular', 'Most Liked'];
    //         case 'recommendation':
    //             return ['recommendation', 'Recommendation'];
    //         case 'current-in-cinema':
    //             return ['currentInCinema', 'Current In Cinema'];
    //         case 'per-genre':
    //             return ['perGenre', 'Per Genre']
    //     }
    // }
    handleRedirect(page) {
        let type = this.getType();
        this.props.loadUserMovies(type, page);

    }
    handleNewMovies(type) {
        //this.props.loadMovies(type, 1);
    }
    handleNewUserMovies(type) {
        this.props.loadUserMovies(type, 1);
    }
    makeNewLinks(){
        let page = parseInt(this.props.match.params.page, 10);
        let type = this.getType();
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
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation loadNewMovies={(t) => this.handleNewMovies(t)}  loadNewUserMovies={(t) => this.handleNewUserMovies(t)}/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        <ListGroup className="user-movies">
                            {this.props.userMovieList.movies.map((movie) =>
                                <ListGroupItem key={movie['id']}>
                                    <NavLink to={'/movie/'+movie['id']}>
                                        {movie['title']}
                                    </NavLink>
                                </ListGroupItem>
                            )}
                        </ListGroup>
                    </Col>
                </Row>
                <Pager>
                    {
                        this.props.userMovieList.pagination.previous_page ?
                            <NavLink exact to={this.makeNewLinks()[0]} onClick={() => this.handleRedirect(this.makeNewPage()[0])}>Previous</NavLink>
                            :
                            null
                    }
                    {' '}
                    {
                        this.props.userMovieList.pagination.next_page ?
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
        userMovieList : state.userMovieList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadUserMovies : (type, page) => {
            dispatch(LoadMovieUserListRequest(type, 2, page));
        },
    }
};

UserLists.propTypes={
    userMovieList: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLists);

