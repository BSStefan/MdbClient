import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class MovieDetails extends Component {
    render() {
        return (
            <section className="movie-details">
                <Col sm={12}>
                    <h3><b>Ime filma</b></h3>
                </Col>
                <Col sm={4}>
                    <img src="http://mdb.dev/api/image?name=proba.jpg" alt="Movie"/>
                </Col>
                <Col sm={8}>
                    <p>
                        <span><b>Original title:</b> Originalni naslov </span>
                    </p>
                    <p>
                        <span><b>Director:</b> </span>
                        <NavLink exact to="#">Ime rezisera</NavLink>
                    </p>
                    <p>
                        <span><b>Writers:</b> </span>
                        <NavLink exact to="#">Imena pisca</NavLink>
                    </p>
                    <p>
                        <span><b>Actors:</b> </span>
                        <NavLink exact to="#">Imena glumaca</NavLink>
                    </p>
                    <p>
                        <span><b>Description:</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</span>
                    </p>
                    <p>
                        <span><b>Tag line:</b> Tag line </span>
                    </p>
                    <p>
                        <span><b>Homepage:</b> </span>
                        <NavLink exact to="#">Stranica</NavLink>
                    </p>
                    <p>
                        <span><b>Runtime:</b> 1:30</span>
                    </p>
                    <p>
                        <span><b>Release day:</b> 1:30</span>
                    </p>
                    <p>
                        <span><b>Budget:</b> 5000</span>
                    </p>
                    <p>
                        <span><b>Current in cinema:</b> Yes</span>
                    </p>
                </Col>

            </section>
        );
    }
}

export default MovieDetails;