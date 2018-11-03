import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as routes from './routes';
import Nav from './Nav.js';
import ExplorePage from './ExplorePage';
import SignIn from './SignIn';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Router>
				<div>
					<Nav></Nav>
					<div className="App">
						<Route extact path={"/discover"} component={ExplorePage}/>
						<Route extact path={"/sign-in"} component={SignIn}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;