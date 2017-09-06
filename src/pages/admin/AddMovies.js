import React, { Component } from 'react';
import { Grid, Row, Col, Pager, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ReactLoading from 'react-loading';
import queryString from 'query-string'


import AdminGetMoviesRequest from './../../functions/ajax/AdminGetMoviesRequest';
import SideAdminNavigation from './../../components/SideAdminNavigation';
import AdminAddMovieRequest from './../../functions/ajax/AdminAddMovieRequest';

class AddMovies extends Component {
    componentWillMount() {
        let type = this.props.match.params.type;
        let page = this.findCurrentPage();
        console.log(page);
        this.props.loadMovies(type,page);
    };
    findMovies(){
        switch (this.props.match.params.type) {
            case 'new-movies':
                return ['newMovies', 'New Movies'];
            case 'popular-movies':
                return ['popularMovies', 'Popular Movies'];
        }
    }
    handleRedirect(page) {
        this.props.startLoader();
        let type = this.props.match.params.type;
        this.props.loadMovies(type, page);
    }
    handleNewMovies(type) {
        this.props.startLoader();
        this.props.loadMovies(type, 1);
    }
    checkIfThereIsAnotherPage(){
        let previous = this.props.movies.currentPage > 1;
        let next = this.props.movies.currentPage < this.props.movies.totalPages;

        return {
            previous : previous,
            next : next
        };
    }
    findCurrentPage(){
        let page = queryString.parse(this.props.location.search);
        page = page.page === undefined ? 1 : parseInt(page.page, 10);
        return page;
    }
    makeNewLinks(){
        let type = this.props.match.params.type;
        let page = this.findCurrentPage();
        let prev = '/admin/'+type+'?page='+(page-1);
        let next = '/admin/'+type+'?page='+(page+1);
        return [prev,next];
    }
    makeNewPage(){
        let page = this.findCurrentPage();
        let prev = (page-1);
        let next = (page+1);
        return [prev,next];
    }
    addMovie(id){
        console.log(id);
        this.props.startLoader();
        this.props.addMovie(id);
    }
    handleUnRedirect(e){
        e.preventDefault();
    }
    render(){
        return (
            <Grid fluid className="dashboard">
                {this.props.movies.loader ? <div className="loader-center"><ReactLoading className="loader" type="spin" color="#008491"/></div>: null}
                <Row>
                    <Col sm={2}>
                        <SideAdminNavigation loadNewMovies={(t) => this.handleNewMovies(t)}/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        <h2>Movies</h2>
                        <ListGroup>
                            {
                                this.props.movies.movies.map((movie)=>
                                    <ListGroupItem key={movie['tmdb_id']} className="clearfix">
                                        {movie['title']}
                                        {!movie['exists'] ? <Button className="pull-right" onClick={()=>this.addMovie(movie['tmdb_id'])}>Add</Button> : <Button bsStyle="success" disabled className="pull-right">Already in db</Button>}
                                    </ListGroupItem>
                                )
                            }
                        </ListGroup>
                    </Col>
                </Row>
                <Pager>
                    {
                        this.checkIfThereIsAnotherPage().previous ?
                            <NavLink exact to={this.makeNewLinks()[0]} onClick={() => this.handleRedirect(this.makeNewPage()[0])}>Previous</NavLink>
                            :
                            <NavLink to="#" onClick={this.handleUnRedirect} className="disable-link">Previous</NavLink>
                    }
                    {' '}
                    {
                        this.checkIfThereIsAnotherPage().next ?
                            <NavLink to={this.makeNewLinks()[1]} onClick={()=>this.handleRedirect(this.makeNewPage()[1])}>Next</NavLink>
                            :
                            <NavLink to="#" onClick={this.handleUnRedirect} className="disable-link">Next</NavLink>
                    }
                </Pager>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies : state.adminMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadMovies : (type, page) => {
            dispatch(AdminGetMoviesRequest(type, page));
        },
        addMovie : (id) => {
            dispatch(AdminAddMovieRequest(id));
        },
        startLoader : () => {
            dispatch({
                type : 'ADMIN_LOADER'
            });
        }
    }
};

AddMovies.propTypes={
    movies: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddMovies);

