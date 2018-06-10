import React, { Component } from 'react'
import { socketAPI } from './socketAPI.js'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: 'rob@hotmail.com',
			password: 'password'
		}
	}

	updateUserInfo = this.props.updateUserInfo

	goToContacts = () => { this.props.goToPage('Contacts') }

	login = () => {

		
		//make api call to socket
		socketAPI.connect(this.state, (response) => {

			// if credentials are correct
				this.updateUserInfo(response);
				
			// else
				// detect whether email or password were wrong
				// ask for credentials again
				
		})

		
	}

	signUp = () => {
		// trigger signUp page instead
		// create SignUp.js or conditional render in login Component
	}

	handleInput = (event) => {
		this.setState( {[event.target.name] : event.target.value} )
	}

	componentDidMount() {
      console.log('LoginDidMount: ', this.state)
  }

	componentDidUpdate() {
      console.log('LoginDidUpdate: ', this.state)
  }


	render() {
		return (
			<form className='page login' onSubmit={this.login}>
				<input
					name='email'
					type='text'
					placeholder='example you@gmail.com'
					className='bubble'
					value={this.state.email}
					onChange={this.handleInput}/>
				<input
					name='password'
					type='text'
					placeholder='your password'
					className='bubble'
					value={this.state.password}
					onChange={this.handleInput}/>

				<div className='bubble' onClick={this.login}>login</div>
			</form>
		)
	}

}

export default Login