import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';

import SmallMovieList from './../../components/SmallMovieList';
import SideNavigation from './../../components/SideNavigation';

class Dashboard extends Component {
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation/>
                    </Col>
                    <Col sm={10} className="movie-small-list">
                        <Col sm={12}>
                            <h3><b>Recommendation</b></h3>
                        </Col>
                        <SmallMovieList/>
                        <Col sm={12}>
                            <h3><b>New movies</b></h3>
                        </Col>
                        <SmallMovieList/>
                        <Col sm={12}>
                            <h3><b>Most popular</b></h3>
                        </Col>
                        <SmallMovieList/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Dashboard;