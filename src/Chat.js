import React, { Component } from 'react'

import { socketAPI } from './socketAPI.js'

import ChatBox from './ChatBox.js'
import WritingContainer from './WritingContainer.js'

class Chat extends Component {
	constructor(props) {
		super(props)

		this.state = {
			publisher: this.props.publisher,
			subscriber: this.props.subscriber,
			
			history: []
		}
	}

	// chat input box
	goToContacts = () => { this.props.goToPage('Contacts') }

	componentDidMount() {
		console.log('call socketAPI here for chat history')

		// send new room request
		// await other contact
		socketAPI.getHistory(this.state.users, (response) => {
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

			if(message.publisher === this.state.publisher.id) {
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
					{this.state.subscriber.name}
				</div>
				<div className='flexEnd'>
					<div className='scroll'>
						<div className='history'>
							{history}
						</div>
						<WritingContainer/>
					</div>
					<ChatBox
						publisher={this.props.publisher}
						subscriber={this.props.subscriber}
					/>
				</div>
				
			</div>
		)
	}
}

export default Chat