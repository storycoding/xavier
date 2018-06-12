import React, { Component } from 'react'
import { socketAPI } from './socketAPI.js'

import Logo from './Logo.js'

class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: 'rob@hotmail.com',
			password: 'password'
		}
	}


	handleSubmit = (event) => {
		event.preventDefault()
		socketAPI.login( this.state )
		this.props.updatePage('Contacts')
		console.log('login triggered handleSubmit')
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
			<div className='page'>
				<div className='logoContainer'>
					<div className='logoTextWrapper'>
						<div className='logoText'>Xavier</div>
					</div>
					<Logo/>
				</div>
				<form className='login' onSubmit={this.handleSubmit}>
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

					<div className='bubble' onClick={this.handleSubmit}>login</div>
				</form>
				</div>
		)
	}

}

export default Login