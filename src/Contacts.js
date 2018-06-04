import React, { Component } from 'react';
import Contact from './Contact.js';

const Contacts = (props) => {

	const goToPage = () => { props.goToPage("AddContact") }

	const contacts = props.contacts.map( (contact) => {
		return (
			<Contact
				goToPage={props.goToPage}
				username={contact}
			/>
		);
	});

	return (
		<div className="page contacts">
			{contacts}
			<div className="bubble" onClick={goToPage}>add</div>
		</div>
	)
}

export default Contacts;