import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SmallMovie from './SmallMovie';
import UserReactionRequest from './../functions/ajax/UserReactionRequest';

class SmallMovieList extends Component {

    handleAction(action) {
        this.props.userReaction(action, this.props.filter);
    }
    render() {
        return (
            <Grid fluid>
                <Row>
                    {this.props.movies.map((item) =>
                        <Col sm={2} key={item.movie.id}>
                            <SmallMovie
                                id={item.movie.id}
                                title={item.movie.title}
                                tagline={item.movie.tag_line}
                                image={item.movie.image_url}
                                likes={item.movie.likes}
                                dislikes={item.movie.dislikes}
                                liked={item.user_reaction.liked}
                                disliked={item.user_reaction.disliked}
                                watchlist={item.user_reaction.watchlist}
                                action={(a) => this.handleAction(a)}
                            />
                        </Col>
                    )}
                </Row>
            </Grid>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listMovies : state.listMovies
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        userReaction : (action, filter) => {
            dispatch(UserReactionRequest(action, filter));
        }
    }
};

SmallMovieList.propTypes={
    listMovies: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SmallMovieList);