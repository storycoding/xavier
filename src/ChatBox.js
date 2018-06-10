import React, { Component } from 'react'
import { socketAPI } from './socketAPI.js'
class ChatBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			publisher_id: props.publisher_id,
			subscriber_id: props.subscriber_id,
			content:''
		}
	}

	handleInput = (event) => {
		console.log('handleInput event.target.value: ', event.target.value)
		this.setState( {content : event.target.value} )
	}

	handleKeyPress = (event) => {
		if(event.nativeEvent.keyCode === 13 && !event.nativeEvent.shiftKey) {
			// only content is being sent - fix this
			console.log('message to be sent to server: ', this.state)
			socketAPI.sendMessage(this.state, (response) => {
				console.log('response from server on sendMessage: ', response)
				// warning: the call back is being triggered cumulatively
				// it's not being triggered by the keypress
					// must be the callback from sendMessage
						// probably creating multiple event listeners

				this.setState( { content: '' } )
			})	
		}
	}

	componentDidUpdate() {
		console.log('ChatBox updated')
		// component being cumulatively updated due to handleKeyPress
	}
	
	render() {
		return (
			<textarea
				className='chatBox'
				type='content'
				value={this.state.content}
				onChange={this.handleInput}
				onKeyPress={this.handleKeyPress}
				placeholder='Write something here...'
			/>
		)
	}

}

export default ChatBox