import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import * as routes from './routes';
import Nav from './Nav';
import HomePage from './HomePage';
import ExplorePage from './ExplorePage';
import SignIn from './SignIn';

class App extends Component {
	constructor(props) {
		super(props);
		//this.signInCallback = this.signInCallback.bind(this);

		this.state = {
			loginCallback: false,
			renderNeedToSignIn: false,
		}
	}

	signInCallback = (data) => {
		this.setState({loginCallback: data});
	}

	discoverUserNotSignedInCallback = (data) => {
		this.setState({renderNeedToSignIn: data});
	}


	render() {
		return (
			<Router>
				<div>
					<Nav></Nav>
					<div className="App">
						<Route extact path={"/discover"} render={(props) => <ExplorePage {...props} loginStatus={this.state.loginCallback} callbackExplore={this.discoverUserNotSignedInCallback}/>}/>
						<Route extact path={"/login"} render={(props) => <SignIn {...props} callbackLogin={this.signInCallback} renderNeedToSignIn={this.state.renderNeedToSignIn}/>}/>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;