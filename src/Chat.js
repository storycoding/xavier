import React, { Component } from 'react';

import ChatBox from './ChatBox.js';
import WritingContainer from './WritingContainer.js';

class Chat extends Component {
	constructor(props) {
		super(props);

		this.state = props.chat;
	}

	updateContactHistory = (contact, history) => {
		this.props.updateContactHistory(contact, history);
	}

	// chat input box
	goToPage = () => { this.props.goToPage("Contacts") }

	componentDidMount() {
		console.log("call socketAPI here for chat history");

		// send new room request
		// await other contact

		// setState of App via props.updateContactHistory(contact, history)

		// choose
			// trigger update on chat from App
			// or trigger it via local state
	}

	render() {

		const history = this.state.history.map( (message, index) => {

			if(message.publisher === this.state.name) {
				return (
					<div
						key={index}
						className="other bubble">
						{message.content}
					</div>
				)
			}

			return (
				<div 
					key={index}
					className="self bubble">
					{message.content}
				</div>
			)

		});

		return (
			<div className="page chat">
				<div className="chatContact">
					<div className="arrow" onClick={this.goToPage}>
					←
					</div>
					{this.state.contactName}
				</div>
				<div className="flexEnd">
					<div className="scroll">
						<div className="history">
							{history}
						</div>
						<WritingContainer/>
					</div>
					<ChatBox/>
				</div>
				
			</div>
		)
	}
}

export default Chat;