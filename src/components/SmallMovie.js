import React, { Component } from 'react';
import {Glyphicon, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class SmallMovie extends Component {

    reaction(action) {
        this.props.action({
            id: this.props.id,
            action: action
        });
    }

    render() {
        return (
            <div className="small-movie">
                <Link to={"/movie/"+this.props.id} className="link-small-movie">
                    {/*<img className="small-image" src="http://mdb.dev/api/image?name=proba.jpg" alt="Movie"/>*/}
                    <img className="small-image" src={"http://mdb.dev/api/image?name="+this.props.image} alt="Movie"/>
                </Link>
                <div className="small-movie-about">
                    <p className="small-movie-title">{this.props.title}</p>
                    <p className="small-movie-tags">{this.props.tagline}</p>
                    <p className="small-movie-reaction">
                        <Button onClick={() => this.reaction('like')}>
                            <Glyphicon glyph="thumbs-up" className={this.props.liked ? "reaction-active small-movie-like" :"small-movie-like"}/>
                        </Button>
                            <span className="reaction-number">{this.props.likes}</span>
                        <Button onClick={() => this.reaction('dislike')}>
                            <Glyphicon glyph="thumbs-down" className={this.props.disliked ? "reaction-active small-movie-dislike" :"small-movie-dislike"}/>
                        </Button>
                            <span className="reaction-number">{this.props.dislikes}</span>
                    </p>
                </div>
            </div>
        );

    }
}

export default SmallMovie;
