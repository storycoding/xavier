import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		// controlled component
		// holds state for API calls to the socket
			// username
			// password
	}
	
	render() {
		return (
			<div className="login">
				(Login)
				<div>username</div>
				<div>password</div>
				<div>login</div>
			</div>
			);
	}

}

export default Login;