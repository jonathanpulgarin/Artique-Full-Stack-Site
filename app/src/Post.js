import React, { Component } from 'react';
import './css/Post.css';


class Post extends Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
            <div className="post-container">
                <div className="post-image" style={{backgroundImage: "url(" + this.props.post.image + ")"}}></div>
                <h3 className="post-name">{this.props.post.projectName}</h3>
                <p className="post-artist-name">{this.props.post.artistName}</p>
                <div className="like-btn">
                    <i className="material-icons">thumb_up</i>
                </div>
            </div>
		);
	}
}

export default Post;