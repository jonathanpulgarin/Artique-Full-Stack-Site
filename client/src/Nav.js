import React, { Component } from 'react';
import './css/Nav.css';
import logo from './images/artique-logo-main.png';


class Nav extends Component {
  state = {users: []}

  render() {
    return (
      <div className="nav-container">
                <div className="nav-main">
					<img className="nav-logo" src={logo}></img>
				</div>
				<div className="nav-bottom-color"></div>
            </div>
    );
  }
}

export default Nav;
