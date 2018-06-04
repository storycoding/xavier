import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		// controlled component
		// holds state for API calls to the socket
			// email
			// password
	}
	
	render() {
		return (
			<div className="page login">
				<input type="text" placeholder="email" className="bubble"></input>
				<input type="text" placeholder="password" className="bubble"></input>
				<div className="bubble">login</div>
			</div>
			);
	}

}

export default Login;