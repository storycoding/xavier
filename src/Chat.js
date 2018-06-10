import React, { Component } from 'react'

import { socketAPI } from './socketAPI.js'

import ChatBox from './ChatBox.js'
import WritingContainer from './WritingContainer.js'

const Chat = (props) => {

	const history = props.history.map( (message, index) => {

		if(message.publisher_id === props.publisher.id) {
			return (
				<div
					key={index}
					className='self bubble'>
					{message.content}
				</div>
			)
		}

		return (
			<div 
				key={index}
				className='other bubble'>
				{message.content}
			</div>
		)

	})

	return (
		<div className='page chat'>
			<div className='chatContact'>
				<div className='arrow' onClick={props.goToContacts}>
				←
				</div>
				{props.subscriber.name}
			</div>
			<div className='flexEnd'>
				<div className='scroll'>
					<div className='history'>
						{history}
					</div>
					<WritingContainer/>
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