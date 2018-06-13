import React from 'react'

import { socketAPI } from './socketAPI.js'

import ChatBox from './ChatBox.js'
import WritingContainer from './WritingContainer.js'


const Chat = (props) => {
	console.log("chat loaded with props:", props)
	const users = {
		publisher_id : props.publisher.id,
		subscriber_id : props.subscriber.id
	}

	socketAPI.getHistory(users) // might be worth moving to the contacts page to avoid re-rendering

	const history = props.history.map( (message, index) => {
		const style = (message.publisher_id === props.publisher.id) ? 'self bubble' : 'other bubble'
		return <div key={index} className={style}>{message.content}</div>
	})

	const handleClick = () => {
		props.goToContacts()
		props.clearHistory()
	}

	return (
		<div className='page chat'>
			<div className='chatContact'>
				<div className='arrow' onClick={handleClick}>
				←
				</div>
				{props.subscriber.name}
			</div>
			<div className='flexEnd'>
				<div className='scroll'>
					<div className='history'>
						{history}
					</div>
					<WritingContainer input={props.input}/>
				</div>
				<ChatBox
					publisher_id={props.publisher.id}
					subscriber_id={props.subscriber.id}
				/>
			</div>
		</div>		
	)
}

export default Chat