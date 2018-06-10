import React, { Component } from 'react'

import { socketAPI } from './socketAPI.js'

import ChatBox from './ChatBox.js'
import WritingContainer from './WritingContainer.js'

class Chat extends Component {
	constructor(props) {
		super(props)

		this.state = {
			publisher_id: this.props.publisher.id,
			subscriber_id: this.props.subscriber.id,
			subscriber_name: this.props.subscriber.name,
			
			history: []
		}
	}

	// chat input box
	goToContacts = () => { this.props.goToPage('Contacts') }

	componentDidMount() {
		console.log('call socketAPI here for chat history')

		// send new room request
		// await other contact
		socketAPI.getMessages(this.state.users, (response) => {
			this.setState( { history: response } )
		})
		// setState of App via props.updateContactHistory(contact, history)

		// choose
			// trigger update on chat from App
			// or trigger it via local state
	}

	componentDidUpdate() {
		console.log('Chat updated')
		// not triggering
	}

	render() {

		const history = this.state.history.map( (message, index) => {

			if(message.publisher === this.state.publisher_id) {
				return (
					<div
						key={index}
						className='self bubble'>
						{message.content}
					</div>
				)
			}

			return (
				<div 
					key={index}
					className='other bubble'>
					{message.content}
				</div>
			)

		})

		return (
			<div className='page chat'>
				<div className='chatContact'>
					<div className='arrow' onClick={this.goToContacts}>
					←
					</div>
					{this.state.subscriber_name}
				</div>
				<div className='flexEnd'>
					<div className='scroll'>
						<div className='history'>
							{history}
						</div>
						<WritingContainer/>
					</div>
					<ChatBox
						publisher_id={this.state.publisher_id}
						subscriber_id={this.state.subscriber_id}
					/>
				</div>
				
			</div>
		)
	}
}

export default Chat