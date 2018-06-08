import React, { Component } from 'react';
import { socketAPI } from './socketAPI.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "rob@gmail.com",
			password: "password"
		}
	}

	setCredentials = this.props.setCredentials;

	goToContacts = () => { this.props.goToPage("Contacts") }

	login = () => {

		//make api call to socket
		socketAPI.connect(this.state, () => {
			socketAPI.getUserInfo(this.state, (response) => {
				console.log("getUserInfo response from server: ", response);
				const credentials = {
					name: response.name,
					email: response.email,
					contacts: response.contacts
				};
				this.setCredentials(credentials);
			});
		});
			// if credentials are correct
				// go to contacts
			// else
				// detect where email or password were wrong
				// ask for credentials again

		
		this.goToContacts();
	}

	signUp = () => {
		// trigger signUp page instead
		// create SignUp.js or conditional render in login Component
	}

	handleInput = (event) => {
		this.setState( {[event.target.name] : event.target.value} );
	}


	render() {
		return (
			<form className="page login" onSubmit={this.login}>
				<input
					name="email"
					type="text"
					placeholder="example you@gmail.com"
					className="bubble"
					value={this.state.email}
					onChange={this.handleInput}/>
				<input
					name="password"
					type="text"
					placeholder="your password"
					className="bubble"
					value={this.state.password}
					onChange={this.handleInput}/>

				<div className="bubble" onClick={this.login}>login</div>
			</form>
		);
	}

}

export default Login;