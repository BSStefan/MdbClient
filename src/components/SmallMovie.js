import React, { Component } from 'react';
import {Glyphicon, Button} from 'react-bootstrap';

class SmallMovie extends Component {
    render() {
        return (
            <div className="small-movie">
                <img className="small-image" src="http://mdb.dev/api/image?name=proba.jpg" alt="Movie"/>
                {/*<img className="small-image" src={"http://mdb.dev/api/image?name="+this.props.image} alt="Movie"/>*/}
                <div className="small-movie-about">
                    <p className="small-movie-title">{this.props.title}</p>
                    <p className="small-movie-tags">{this.props.tagline}</p>
                    <p className="small-movie-reaction">
                        <Button><Glyphicon glyph="thumbs-up" className="small-movie-like"/></Button>
                        <span className="reaction-number">{this.props.likes}</span>
                        <Button><Glyphicon glyph="thumbs-down" className="small-movie-dislike"/></Button>
                        <span className="reaction-number">{this.props.likes}</span>
                        <Glyphicon glyph="eye-open" className="small-movie-dislike"/>
                    </p>

                </div>
            </div>
        );

    }
}

export default SmallMovie;
