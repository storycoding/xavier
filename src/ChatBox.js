import React, { Component } from 'react';

class ChatBox extends Component {
	constructor() {
		super();
		// controlled component
		// holds state for API calls to the socket
	}

	//handleInput

	//handleKeyPress

	//handleSubmit
	
	render() {
		return <div className="chatBox">
		<input type="textarea" className="textarea" placeholder="write something"></input>
		</div>
	}

}

export default ChatBox;