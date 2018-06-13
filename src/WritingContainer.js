import React, { Component } from 'react'

import Writing from './Writing'

import { socketAPI } from './socketAPI.js'

console.log(socketAPI)

class WritingContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			publisher_id: "",
			subscriber_id: "",
			content: "..."
		}
	}

	updateInput = (input) => this.setState(input)

	componentDidMount() {
		socketAPI.registerForInput(this.updateInput.bind(this))
	}
	

	render() {
		return (
			<div className="writingContainer">
				<Writing input={this.state}/>
			</div>
		)
	}
}

export default WritingContainer