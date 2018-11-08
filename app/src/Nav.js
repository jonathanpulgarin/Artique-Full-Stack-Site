import React, { Component } from 'react';
import './css/Nav.css';

class App extends Component {
	render() {
		return (
			<div className="nav-container">
                <div className="nav-main">
					<img className="nav-logo" alt="Artique Logo" src="./images/artique-logo-main.png"></img>
					
				</div>
				<div className="nav-bottom-color"></div>
            </div>
		);
	}
}

export default App;