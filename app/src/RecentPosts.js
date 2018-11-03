import React, { Component } from 'react';
import './css/RecentPosts.css';
import Post from './Post.js';


class RecentPosts extends Component {
    constructor(props) {
        super(props);
    }
    
	render() {
		return (
            <div className="recent-posts-container">
                <h2 className="dashboard-sub-header">Recent work from artists you follow</h2>
                {this.props.recentPosts.map((post) => {
                    return <Post post={post}></Post>
                })
                }
            </div>
		);
	}
}

export default RecentPosts;