import React, { Component } from 'react';
import { Col, Button, Glyphicon, Table } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

class MovieDetails extends Component {

    likeDislike(action) {
        this.props.likeDislike(action, this.props.details.details.id);
    };
    watchList() {
        this.props.addTowWatchlist(this.props.details.details.id);
    };
    watched() {
        this.props.addToWatched(this.props.details.details.id);
    };

    render() {
        return (
            <section className="movie-details">
                <Col sm={12}>
                    <h3><b>{this.props.details.details.title}</b></h3>
                </Col>
                <Col sm={4}>
                    <img src={"http://mdb.dev/api/image?name="+this.props.details.details.image_url} alt="Movie"/>
                </Col>
                <Col sm={8}>
                    <p>
                        <span><b>Original title:</b> {this.props.details.details.original_title}</span>
                    </p>
                    <p>
                        <span><b>Director:</b> </span>
                        <NavLink exact to={"/person/director/"+ this.props.details.details.director_id}>{this.props.details.director[this.props.details.details.director_id]}</NavLink>
                    </p>
                    <p>
                        <span><b>Writers:</b> </span>
                        {this.props.details.writers.map((writer, i) =>
                            <NavLink exact to={"/person/writer/"+writer.id} key={writer.id}> {writer.name}
                                {i<this.props.details.writers.length-1 ?  ',' : ' '}
                            </NavLink>
                        )}
                    </p>
                    <p>
                        <span><b>Actors:</b> </span>
                        {this.props.details.actors.map((actor, i) =>
                            <NavLink exact to={"/person/actor/"+actor.id} key={actor.id}> {actor.name}
                                {i<this.props.details.actors.length-1 ?  ',' : ' '}
                            </NavLink>
                        )}
                    </p>
                    <p>
                        <span><b>Description:</b> {this.props.details.details.description}</span>
                    </p>
                    <p>
                        <span><b>Tag line:</b> {this.props.details.details.tag_line}</span>
                    </p>
                    <p>
                        <span><b>Keywords:</b> {this.props.details.keywords.map((keyword, i) =>
                            <span key={keyword.id}>{keyword.word}{i<this.props.details.keywords.length-1 ?  ',' : ' '} </span>)  }</span>
                    </p>
                    <p>
                        <span><b>Homepage:</b> </span>
                        <a href={this.props.details.details.homepage} target="_blank">{this.props.details.details.homepage}</a>
                    </p>
                    <p>
                        <span><b>Runtime:</b> {this.props.details.details.runtime} minutes</span>
                    </p>
                    <p>
                        <span><b>Release day:</b> {this.props.details.details.release_day}</span>
                    </p>
                    <p>
                        <span><b>Budget:</b> {this.props.details.details.budget}</span>
                    </p>
                    <p>
                        <span><b>Current in cinema:</b> {this.props.details.details.in_cinema ? 'Yes' : 'No'}</span>
                    </p>
                    {
                        this.props.details.details.in_cinema ?
                            <p><Button onClick={() => this.props.findProjections()}>Find projections</Button></p> :
                            null
                    }
                    {
                        this.props.projections.length !== 0 ?
                            <Col>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Cinema</th>
                                        <th>Date</th>
                                        <th>Time</th>
                                        <th>Room</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.props.projections.map((projection) =>
                                        <tr key={projection.id}>
                                            <td>{projection.name}</td>
                                            <td>{projection.date}</td>
                                            <td>{projection.time}</td>
                                            <td>{projection.room}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                                <Button onClick={this.props.destroyListProjections}>Close</Button>
                            </Col>: null
                    }
                    <p className="large-movie-reaction">
                        <Button onClick={() => this.likeDislike('like')}>
                            <Glyphicon glyph="thumbs-up" className={this.props.userReaction.liked ? "reaction-active small-movie-like" :"small-movie-like"}/>
                        </Button>
                        <span className="reaction-number">{this.props.details.likes}</span>
                        <Button onClick={() => this.likeDislike('dislike')}>
                            <Glyphicon glyph="thumbs-down" className={this.props.userReaction.disliked ? "reaction-active small-movie-dislike" :"small-movie-dislike"}/>
                        </Button>
                        <span className="reaction-number">{this.props.details.dislikes}</span>
                        {!this.props.userReaction.watched ?
                            <Button onClick={() => this.watchList()} className="large-watch-btn">
                                <span>{!this.props.userReaction.watchlist ? "Add to Watchlist" : "Remove from Watchlist"}</span>
                            </Button>
                            : null
                        }
                        <Button onClick={() => this.watched()} className="large-watch-btn">
                            <span>{!this.props.userReaction.watched ?"Checked as watched" : "Unchecked as watched"}</span>
                        </Button>
                    </p>
                </Col>

            </section>
        );
    }
}

MovieDetails.PropTypes = {
    likeDislike: PropTypes.func.isRequired,
    addTowWatchlist: PropTypes.func.isRequired,
    findProjections: PropTypes.func.isRequired,
    addToWatched: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired,
    userReaction: PropTypes.object.isRequired,
    destroyListProjections: PropTypes.func.isRequired
};
export default MovieDetails;