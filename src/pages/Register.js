import React, { Component } from 'react';
import { FormGroup, FormControl, Col, Grid, Row, Button } from 'react-bootstrap';
import {NavLink} from 'react-router-dom';

import './../css/auth.css';
import { Validation } from './../functions/Validation';

class Register extends Component {

    componentWillMount() {
        document.body.style.background = '#007991';
        document.body.style.background =  '-webkit-linear-gradient(to right, #78ffd6, #007991)';
        document.body.style.background = 'linear-gradient(to right, #78ffd6, #007991)';
    }
    componentWillUnmount() {
        document.body.style.background = '#FFF';
    }

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
            },
            first_name: {
                validate : null,
                validateMsg: '',
                value : ''
            },
            last_name: {
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
            validate = 'error';
            validateMsg = result[1];
        }

        return [validate, validateMsg];
    }

    handleChanges(e) { console.log(e);
        let info = e.target.name;
        let newValue = e.target.value;
        let resultValidation = this.handleValidation(info, newValue);
        this.setState({
            email    : this.state.email,
            password : this.state.password,
            first_name : this.state.first_name,
            last_name : this.state.last_name,
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
                        <section className="auth-form text-center">
                            <div className="auth-mdb-title">
                                <h1>
                                    Register
                                </h1>
                            </div>
                            <form>
                                <Row>
                                    <Col md={8} mdOffset={2}>
                                        <FormGroup controlId="first_name" validationState={this.getValidationState('first_name')}>
                                            <FormControl
                                                type="text"
                                                name="first_name"
                                                value={this.state.first_name.value}
                                                placeholder="Enter first name"
                                                onChange={(e) => this.handleChanges(e)}
                                            />
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8} mdOffset={2}>
                                        <FormGroup controlId="last_name" validationState={this.getValidationState('last_name')}>
                                            <FormControl
                                                type="text"
                                                name="last_name"
                                                value={this.state.last_name.value}
                                                placeholder="Enter last name"
                                                onChange={(e) => this.handleChanges(e)}
                                            />
                                            <FormControl.Feedback />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={8} mdOffset={2}>
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
                                    <Col md={8} mdOffset={2}>
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
                                    <Col md={8} mdOffset={2} className="text-center">
                                        <Button type="submit" block className="mdb-main-btn">
                                            Register
                                        </Button>
                                    </Col>
                                </Row>
                            </form>
                            <Row>
                                <Col md={8} mdOffset={2}>
                                    <p className="redireact-register">
                                        Already have account?
                                        <NavLink exact to="/login">
                                            Log In
                                        </NavLink>
                                    </p>
                                </Col>
                            </Row>
                        </section>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Register;
