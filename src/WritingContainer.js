import React, { Component } from 'react';
import { socketAPI } from './server/socketAPI.js';
import Writing from './Writing';

class WritingContainer extends Component {
	constructor() {
		super();
		
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