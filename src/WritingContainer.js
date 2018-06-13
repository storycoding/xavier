import React, { Component } from 'react'

import Writing from './Writing'

import { socketAPI } from './socketAPI.js'

console.log(socketAPI)

class WritingContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: {
				publisher_id: props.publisher_id,
				subscriber_id: props.subscriber_id
			},
			input: {
				publisher_id: "",
				subscriber_id: "",
				content: "..."
			}
			
		}
	}

	updateInput = (response) => {
		console.log('a: ', response.input)
		if(this.state.users.subscriber_id === response.input.publisher_id) {
			console.log('buzz')
			this.setState( { input : response.input } )
		}
	}

	componentDidMount() {
		socketAPI.registerForInput(this.updateInput.bind(this))
	}
	

	render() {
		return (
			<div className="writingContainer">
				<Writing input={this.state.input}/>
			</div>
		)
	}
}

export default WritingContainer