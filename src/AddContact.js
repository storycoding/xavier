import React, { Component } from 'react';

class AddContact extends Component {
	constructor() {
		super();
		// controlled component
		// holds state for API calls to the socket
			// email
		this.state = {
			email: "Laura@gmail.com"
		}
	}
	
	handleSubmit = () => {
		console.log("Searching for contact (not)")
	}

	render() {
		return (
			<form className="page addContact" onSubmit={this.handleSubmit}>
				<input
					type="text"
					placeholder="email"
					className="bubble" 
					value={this.state.email}
				>
					{this.state.email}
				</input>
				<div className="bubble">search</div>
			</form>
			);
	}

}

export default AddContact;