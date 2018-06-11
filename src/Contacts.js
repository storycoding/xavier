import React from 'react'

const Contacts = (props) => {
	const goToAddContact = () => props.updatePage('AddContact')

	const handleClick = (contact) => {
		props.updateSubscriber(contact)
		props.updatePage('Chat')
	}

	const contacts = props.contacts.map( (contact, index) => {
		return (
			<div
				key={index}
				value={contact}
				className='bubble contact'
				onClick={handleClick.bind(null, contact)}>
				{contact.name}
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