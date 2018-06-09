import React, { Component } from 'react'
import { socketAPI } from './socketAPI.js'
class ChatBox extends Component {
	constructor(props) {
		super(props)
		this.state = {
			publisher: {
				name: props.publisher.name,
				id: props.publisher.id
			},

			content:''
			
		}
	}

	handleInput = (event) => {
		console.log('handleInput event.target.value: ', event.target.value)
		this.setState( {content : event.target.value} )
	}

	handleKeyPress = (event) => {
		if(event.nativeEvent.keyCode === 13 && !event.nativeEvent.shiftKey) {
			socketAPI.publish(this.state, (response) => {
				console.log('response from server on publish: ', response)
				// warning: the call back is being triggered cumulatively
				// it's not being triggered by the keypress
					// must be the callback from publish
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