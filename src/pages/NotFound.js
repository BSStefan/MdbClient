import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import './../css/auth.css';

class NotFound extends Component {

    componentWillMount() {
        document.body.style.background = '#007991';
        document.body.style.background =  '-webkit-linear-gradient(to right, #78ffd6, #007991)';
        document.body.style.background = 'linear-gradient(to right, #78ffd6, #007991)';
    }
    componentWillUnmount() {
        document.body.style.background = '#FFF';
    }

    render(){
        return (
            <Grid>
                <Row>
                    <Col md={8} mdOffset={2} className="text-center">
                        <h2 className="not-found-text">Sorry, page not found</h2>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default NotFound;