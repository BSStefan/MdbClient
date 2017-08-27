import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import MovieDetails from './../../components/MovieDetails';

import SideNavigation from '../../components/SideNavigation';

class Movie extends Component {
    constructor(props) {
        super(props);
        let movieId = parseInt(this.props.match.params.id, 10);
    }
    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation/>
                    </Col>
                    <Col sm={10} className="movie-one">
                        <MovieDetails/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Movie;
