import React from 'react'

const Contacts = (props) => {

	const goToAddContact = () => { props.goToPage('AddContact') }

	const goToChat = () => props.goToPage('Chat')

	const contacts = props.contacts.map( (contact, index) => {
		return (
			<div
				key={index}
				className='bubble contact'
				onClick={goToChat}>
				{contact}
			</div>
		)
	})

	return (
		<div className='page contacts'>
			{contacts}
			<div className='bubble' onClick={goToAddContact}>add</div>
		</div>
	)
}

export default Contacts