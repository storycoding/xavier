import React, { Component } from 'react';

const Contacts = (props) => {

	const goToAddContact = () => { props.goToPage("AddContact") }

	const goToChat = () => { props.goToPage("Chat") }
	const contacts = props.contacts.map( (contact) => {
		return (
			<div
				className="bubble contact"
				onClick={goToChat}>
				{contact}
			</div>
		);
	});

	return (
		<div className="page contacts">
			{contacts}
			<div className="bubble" onClick={goToAddContact}>add</div>
		</div>
	)
}

export default Contacts;