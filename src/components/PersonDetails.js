import React, { Component } from 'react';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class PersonDetails extends Component {

    render() {
        return (
            <section className="movie-details">
                <Col sm={4}>
                    <img src={"http://mdb.dev/api/image?name="+this.props.person.image_url} alt="Person"/>
                </Col>
                <Col sm={8}>
                    <p>
                        <span><b>Name:</b> {this.props.person.name}</span>
                    </p>
                    <p>
                        <span><b>Place of Birth:</b> {this.props.person.place_of_birth}</span>
                    </p>
                    <p>
                        <span><b>Birthday:</b> {this.props.person.birthday}</span>
                    </p>
                    <p>
                        <span><b>Dead Day:</b> {this.props.person.dead_day}</span>
                    </p>
                    <p>
                        <span><b>Description:</b> {this.props.person.biography}</span>
                    </p>
                </Col>
                <Col sm={8}>
                    <p><b>Movies:</b></p>
                    <ListGroup>
                    {
                        this.props.person.movies ?
                            this.props.person['movies'].map((movie) =>
                            <ListGroupItem key={movie.id}>
                                <NavLink exact to={"/movie/"+movie['id']}>
                                    {movie['title']}
                                </NavLink>
                            </ListGroupItem>)
                            :
                            <ListGroupItem>There are no movies with this person</ListGroupItem>
                    }
                    </ListGroup>
                </Col>
            </section>
        );
    }
}

PersonDetails.PropTypes = {
    person: PropTypes.object.isRequired,
};

export default PersonDetails;
