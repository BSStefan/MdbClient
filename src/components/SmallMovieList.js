import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import SmallMovie from './SmallMovie';

class SmallMovieList extends Component {
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
                            />
                        </Col>
                    )}
                </Row>
            </Grid>
        )
    }
}

export default SmallMovieList;