import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "me",
			password: "password"
		}
	}

	goToPage = () => {
		this.props.goToPage("Contacts");
	}

	submit = () => {
		//make api call to socket
			// use email and password
		this.goToPage();
	}
	
	

	render() {
		return (
			<div className="page login">
				<input type="text" placeholder="email" className="bubble"></input>
				<input type="text" placeholder="password" className="bubble"></input>
				<div className="bubble" onClick={this.submit}>login</div>
			</div>
			);
	}

}

export default Login;