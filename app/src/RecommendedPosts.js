import React, { Component } from 'react';
import './css/RecentPosts.css';
import Post from './Post.js';


class RecommendedPosts extends Component {
	render() {
		return (
            <div className="recommended-posts-container">
                <h2 className="dashboard-sub-header">Recent work from artists you follow</h2>
                {this.props.recentPosts.map((post) => {
                    return <Post key={post.id} post={post}></Post>
                })
                }
            </div>
		);
	}
}

export default RecommendedPosts;