import React, { Component } from 'react';
import Contact from './Contact.js';

const Contacts = (props) => {

	const goToPage = () => { props.goToPage("AddContact") }

	return (
		<div className="page contacts">
			<Contact goToPage={props.goToPage}/>
			<div className="bubble">add</div>
		</div>
	)
}

export default Contacts;