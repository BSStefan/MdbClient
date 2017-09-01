import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import SmallMovie from './SmallMovie';

class SmallMovieList extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                    <Col sm={2}>
                        <SmallMovie/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default SmallMovieList;