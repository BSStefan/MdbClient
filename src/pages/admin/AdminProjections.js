import React, { Component } from 'react';
import { Grid, Row, Col, Button, Alert, ListGroupItem, ListGroup} from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect }  from 'react-redux';

import SaveMoviesInCinemaRequest from './../../functions/ajax/SaveMoviesInCinemaRequest';
import SaveMoviesInCinemaProjectionsRequest from './../../functions/ajax/SaveMoviesInCinemaProjectionsRequest';
import SideAdminNavigation from '../../components/SideAdminNavigation';
import ReactLoading from 'react-loading';


class AdminProjections extends Component {

    componentWillMount() {
        this.props.destroyLoader();
    }
    componentWillUnmount() {
        this.props.destroyProjectionsInfo();
    }
    handleNewMovies(t){
    }
    handleSaveMovies(){
        this.props.destroyProjectionsInfo();
        this.props.startLoader();
        this.props.saveMovies();
    }
    handleSaveProjections(){
        this.props.destroyProjectionsInfo();
        this.props.startLoader();
        this.props.saveProjections();
    }
    render(){
        return (
            <Grid fluid className="dashboard">
                {this.props.adminProjections.loader ? <div className="loader-center"><ReactLoading className="loader" type="spin" color="#008491"/></div>: null}
                <Row>
                    <Col sm={2}>
                        <SideAdminNavigation loadNewMovies={(t) => this.handleNewMovies(t)}/>
                    </Col>
                    <Col sm={10} className="admin-home">
                        <Row className="admin-buttons">
                            <Col sm={4} smOffset={2}>
                                <Button bsSize="large" className="mdb-main-btn" onClick={this.handleSaveMovies.bind(this)}>Save movies</Button>
                            </Col>
                        </Row>
                        <Row className="admin-buttons">
                            <Col sm={4} smOffset={2}>
                                <Button bsSize="large" className="mdb-main-btn" onClick={this.handleSaveProjections.bind(this)}>Save Projections</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4} smOffset={2}>
                                {
                                    this.props.adminProjections.projections.movies_msg !== false &&
                                    this.props.adminProjections.projections.movies_msg === 'Success' ?
                                        <ListGroup className="list-movies-in-cinema">
                                            {this.props.adminProjections.projections.movies.map((movie)=>
                                                <ListGroupItem>
                                                    <span>{movie['title']}</span><span className="pull-right">{movie['status'] ? "Success" : "Failed"}</span>
                                                </ListGroupItem>

                                            )}</ListGroup>  : null
                                }
                                {
                                    this.props.adminProjections.projections.projections_msg !== false ?
                                        <Alert bsStyle="info">{this.props.adminProjections.projections.projections_msg}</Alert> : null
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminProjections : state.adminMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveMovies : () => {
            dispatch(SaveMoviesInCinemaRequest());
        },
        saveProjections : () => {
            dispatch(SaveMoviesInCinemaProjectionsRequest());
        },
        destroyProjectionsInfo : () => {
            dispatch({
                type : 'DESTROY_PROJECTIONS'
            });
        },
        startLoader : () => {
            dispatch({
                type : 'ADMIN_LOADER'
            });
        },
        destroyLoader: () => {
            dispatch({
                type : 'ADMIN_LOADER_TURNOFF'
            });
        },
    }
};

AdminProjections.propTypes={
    adminProjections: PropTypes.object.isRequired,
    saveMovies: PropTypes.func.isRequired,
    saveProjections: PropTypes.func.isRequired,
    destroyProjectionsInfo: PropTypes.func.isRequired,
    startLoader: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminProjections);
