import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		// controlled component
		// holds state for API calls to the socket
			// email
			// password
	}
	
	goToPage = () => {
		this.props.goToPage("Contacts");
	}

	render() {
		return (
			<div className="page login">
				<input type="text" placeholder="email" className="bubble"></input>
				<input type="text" placeholder="password" className="bubble"></input>
				<div className="bubble" onClick={this.goToPage}>login</div>
			</div>
			);
	}

}

export default Login;