import React, { Component } from 'react';

class AddContact extends Component {
	constructor() {
		super();
		// controlled component
		// holds state for API calls to the socket
			// email
	}
	
	render() {
		return (
			<div className="page addContact">
				<input type="text" placeholder="email" className="bubble"></input>
				<div className="bubble">search</div>
			</div>
			);
	}

}

export default AddContact;