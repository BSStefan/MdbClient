import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import PersonDetails from './../../components/PersonDetails';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';

import SideNavigation from '../../components/SideNavigation';
import PersonRequest from '../../functions/ajax/PersonRequest';

class Person extends Component {

    componentWillMount() {
        const personId = parseInt(this.props.match.params.id, 10);
        const role = this.props.match.params.role;
        this.props.loadPerson(role, personId);
    }
    componentWillUnmount() {
        this.props.destroyPerson();
    }

    render(){
        return (
            <Grid fluid className="dashboard">
                <Row>
                    <Col sm={2}>
                        <SideNavigation/>
                    </Col>
                    <Col sm={10} className="movie-one">
                        <PersonDetails
                            person = {this.props.person.person}
                        />
                    </Col>
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        person : state.person
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPerson : (role, id) => {
            dispatch(PersonRequest(role, id));
        },
        destroyPerson : () => {
            dispatch({
                type : 'DESTROY_PERSON'
            });
        }

    }
};

Person.propTypes={
    person: PropTypes.object.isRequired,
    loadPerson: PropTypes.func.isRequired,
    destroyPerson : PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Person);