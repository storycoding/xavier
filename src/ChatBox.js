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
		this.setState( {content : event.target.value} )
	}

	handleKeyPress = (event) => {
		if(event.nativeEvent.keyCode === 13 && !event.nativeEvent.shiftKey) {
			socketAPI.sendMessage(this.state)
			this.setState( { content: '' } )	
		}
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