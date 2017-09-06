import React, { Component } from 'react';
import { Grid, Row, Col, Jumbotron} from 'react-bootstrap';

import PropTypes from 'prop-types';
import { connect }  from 'react-redux';

import LoadInfoRequest from './../../functions/ajax/LoadInfoRequest';
import SideAdminNavigation from '../../components/SideAdminNavigation';


class AdminHome extends Component {

    componentWillMount() {
        this.props.loadInfo();
    }
    componentWillUnmount() {
        this.props.destroyInfo();
    }
    handleNewMovies(t){
    }
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideAdminNavigation loadNewMovies={(t) => this.handleNewMovies(t)}/>
                    </Col>
                    <Col sm={10} className="admin-home">
                        <Col sm={4}>
                            <Jumbotron className="text-center" style={{backgroundColor:"#0097A7"}}>
                                <h3>Movies in Db:</h3>
                                <p>{this.props.adminInfo.movies}</p>
                            </Jumbotron>
                        </Col>
                        <Col sm={4}>
                            <Jumbotron className="text-center" style={{backgroundColor:"#F18D9E"}}>
                                <h3>Actors in Db:</h3>
                                <p>{this.props.adminInfo.actors}</p>
                            </Jumbotron>
                        </Col>
                        <Col sm={4}>
                            <Jumbotron className="text-center" style={{backgroundColor:"#E6D72A"}}>
                                <h3>Directors in Db:</h3>
                                <p>{this.props.adminInfo.directors}</p>
                            </Jumbotron>
                        </Col>
                        <Col sm={4}>
                            <Jumbotron className="text-center" style={{backgroundColor:"#5BC8AC"}}>
                                <h3>Writers in Db:</h3>
                                <p>{this.props.adminInfo.writers}</p>
                            </Jumbotron>
                        </Col>
                        <Col sm={4}>
                            <Jumbotron className="text-center" style={{backgroundColor:"#98DBC6"}}>
                                <h3>Users in Db:</h3>
                                <p>{this.props.adminInfo.users}</p>
                            </Jumbotron>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        adminInfo : state.adminMovies.info
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadInfo : () => {
            dispatch(LoadInfoRequest());
        },
        destroyInfo : () => {
            dispatch({
                type: 'DESTROY_INFO'
            });
        },
    }
};

AdminHome.propTypes={
    adminInfo: PropTypes.object.isRequired,
    loadInfo: PropTypes.func.isRequired,
    destroyInfo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminHome);