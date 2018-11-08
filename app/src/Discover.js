import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RecentPosts from './RecentPosts';
import RecommendedPosts from './RecommendedPosts';


class Discover extends Component {
    constructor(props) {
		super(props);
    }
    
	render() {
		return (
			<div className="explore-page-container">
                <RecentPosts recentPosts={this.props.recentPosts}></RecentPosts>
                <RecommendedPosts recentPosts={this.props.recentPosts}></RecommendedPosts>
            </div>
		);
	}
}

export default Discover;