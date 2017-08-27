import React from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import './../css/auth.css';

export const NotFound = () => {
    return (
        <Grid>
            <Row>
                <Col md={8} mdOffset={2} className="text-center">
                    <h2 className="not-found-text">Sorry, page not found</h2>
                </Col>
            </Row>
        </Grid>
    )
};