import React, { Component } from 'react';
// import { socketAPI } from './socketAPI.js';
import Writing from './Writing';

class WritingContainer extends Component {
	constructor() {
		super();
		this.state = {
			content: ""
		}
	}

	render() {
		return (
			<div className="writingContainer">
				<Writing/>
			</div>
		);
	}
}

export default WritingContainer;