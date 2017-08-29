import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import SearchMovies from "../../components/SearchMovies";

class NewUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: [],
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

    render() {
        return (
            <Grid className="auth-page">
                <Row>
                    <Col md={6} mdOffset={3}>
                        <section className="auth-form text-center">
                            <div className="start-form">
                                <h1>Your favorite three movies</h1>
                                <Row>
                                    <Col md={8} mdOffset={2}>
                                        <SearchMovies/>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Grid>

        );
    }

}

export default NewUser;