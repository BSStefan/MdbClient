import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';

class SmallMovie extends Component {
    render() {
        return (
            <div className="small-movie">
                <img className="small-image" src="http://mdb.dev/api/image?name=proba.jpg" alt="Movie"/>
                <div className="small-movie-about">
                    <p className="small-movie-title">Now you see me</p>
                    <p className="small-movie-tags">Tagovi</p>
                    <p className="small-movie-reaction">
                        <Glyphicon glyph="thumbs-up" className="small-movie-like"/>
                        <span className="reaction-number">100</span>
                        <Glyphicon glyph="thumbs-down" className="small-movie-dislike"/>
                        <span className="reaction-number">100</span>
                        <Glyphicon glyph="eye-open" className="small-movie-dislike"/>
                    </p>

                </div>
            </div>
        );

    }
}

export default SmallMovie;
