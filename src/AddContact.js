import React, { Component } from 'react';

class AddContact extends Component {
	constructor() {
		super();

		this.state = {
			email: 'Laura@gmail.com'
		}
	}

	handleInput = (event) => {
		this.setState( { email : event.target.value } )
	}
	
	handleSubmit = () => {
		console.log('Search triggered, not yet implemented')
		// actually trigger search for an existing account
			// create the relation in the database
	}

	render() {
		return (
			<form className='page addContact' onSubmit={this.handleSubmit}>
				<input
					name='email'
					type='text'
					placeholder='email'
					className='bubble' 
					value={this.state.email}
					onChange={this.handleInput}
				/>
				<div className='bubble' onClick={this.handleSubmit}>search</div>
			</form>
			);
	}

}

export default AddContact;