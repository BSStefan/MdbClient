import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Col, Grid, Row, Button } from 'react-bootstrap';

import './../css/auth.css';
import { Validation } from './../functions/Validation';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            email   : {
                validate : null,
                validateMsg: '',
                value : ''
            },
            password: {
                validate : null,
                validateMsg: '',
                value : ''
            }
        }
    }

    getValidationState(info) {
        return this.state[info]['validate'];
    }

    handleValidation(info, value) {
        let result = Validation(info, value);
        let validate = null;
        let validateMsg = '';
        if(result[0]) {
            validate = 'success';
            validateMsg = '';
        }
        else {
            validate = 'error'
            validateMsg = result[1];
        }

        return [validate, validateMsg];
    }

    handleChanges(e) {
        let info = e.target.name;
        let newValue = e.target.value;
        let resultValidation = this.handleValidation(info, newValue);
        this.setState({
            email    : this.state.email,
            password : this.state.password,
            [info] : {
                value : newValue,
                validate : resultValidation[0],
                validateMsg : resultValidation[1]
            }
        });
    }

    render() {
        return (
            <Grid className="auth-page">

                <Row>
                    <Col md={6} mdOffset={3}>
                        <section className="auth-form">
                            <form>
                                <Row>
                                    <Col md={6} mdOffset={3}>
                                        <FormGroup controlId="email" validationState={this.getValidationState('email')}>
                                            <FormControl
                                                type="text"
                                                name="email"
                                                value={this.state.email.value}
                                                placeholder="Enter email"
                                                onChange={(e) => this.handleChanges(e)}
                                            />
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} mdOffset={3}>
                                        <FormGroup controlId="password" validationState={this.getValidationState('password')}>
                                            <FormControl
                                                type="password"
                                                name="password"
                                                value={this.state.password.value}
                                                placeholder="Enter password (minimum 6 characters)"
                                                onChange={(e) => this.handleChanges(e)}
                                            />
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} mdOffset={3}>
                                        <Button type="submit">
                                            Submit
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                        </section>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Login;