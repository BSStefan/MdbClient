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
                    <Col sm={10}>
                        <SmallMovieList/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Dashboard;