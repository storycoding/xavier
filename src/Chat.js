import React, { Component } from 'react';

import ChatBox from './ChatBox.js';
import History from './History.js';
import WritingContainer from './WritingContainer.js';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "me",
			history: []
		}
	}
	// consider holding state in the parent app component
	// displays contact name
	// return button
	// chat history

	updateContactHistory = (contact, history) => {
		this.props.updateContactHistory(contact, history);
	}
	// chat input box
	goToPage = () => { this.props.goToPage("Contacts") }

	render() {
		return (
			<div className="page chat">
				<div className="chatContact">
					<div className="arrow" onClick={this.goToPage}>←</div>
					contact name
				</div>
				<div className="flexEnd">
					<div className="scroll">
						<History/>
						<WritingContainer/>
					</div>
					<ChatBox/>
				</div>
				
			</div>
		)
	}
}

export default Chat;