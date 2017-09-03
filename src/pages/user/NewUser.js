import React, { Component } from 'react';
import { Grid, Row, Col, Button, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import ThreeFavoriteMovieRequest from './../../functions/ajax/ThreeFavoriteMovieRequest';
import SearchMovies from "../../components/SearchMovies";

class NewUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            'movie1' : '',
            'movie2' : '',
            'movie3' : '',
            'error'  : ''
        };
    }

    componentWillMount() {
        document.body.style.background = '#007991';
        document.body.style.background =  '-webkit-linear-gradient(to right, #78ffd6, #007991)';
        document.body.style.background = 'linear-gradient(to right, #78ffd6, #007991)';
    }
    componentWillUnmount() {
        document.body.style.background = '#FFF';
    }

    handleChange(name,value){
        this.setState({
            ...this.state,
         [name]: value
        });
    }
    handleSubmit(e) {
        if(this.state.movie1 !== '' && this.state.movie2 !== '' && this.state.movie3 !== '') {
            e.preventDefault();
            this.setState({
                ...this.state,
                error : ''
            });
            this.props.loader();
            this.props.submitForm({
                movie1 : this.state.movie1,
                movie2 : this.state.movie2,
                movie3 : this.state.movie3,
            })
        }
        else{
            this.setState({
                ...this.state,
                error : 'Please fill in all movies'
            });
        }
    }

    render() {
        return (
            <Grid className="auth-page">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <section className="auth-form text-center">
                            {this.props.auth.loader ? <div className="loader-center"><ReactLoading className="loader" type="spin" color="#008491"/></div>: null}
                            <div className="start-form">
                                <h1>Your favorite three movies</h1>
                                {
                                    this.state.error !== '' ?
                                        <Col md={8} mdOffset={2}><Alert bsStyle="danger">{this.state.error}</Alert></Col> : null
                                }
                                <Row className="movie-start-input">
                                    <Col md={8} mdOffset={2}>
                                        <SearchMovies name="movie1" onChange={this.handleChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row className="movie-start-input">
                                    <Col md={8} mdOffset={2}>
                                        <SearchMovies name="movie2" onChange={this.handleChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Row className="movie-start-input">
                                    <Col md={8} mdOffset={2}>
                                        <SearchMovies name="movie3" onChange={this.handleChange.bind(this)}/>
                                    </Col>
                                </Row>
                                <Button className="mdb-main-btn" onClick={(e) => this.handleSubmit(e)}>Next</Button>
                            </div>
                            {this.props.auth.movies_redirect === true ? <Redirect to="/home" /> : null}
                        </section>
                    </Col>
                </Row>
            </Grid>

        );
    }

}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitForm : (data) => {
            dispatch(ThreeFavoriteMovieRequest(data));
        },
        loader : () => {
            dispatch({
                type : 'LOADER'
            });
        }
    }
};

NewUser.propTypes={
    submitForm : PropTypes.func.isRequired,
    auth : PropTypes.object.isRequired,
    loader : PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewUser);