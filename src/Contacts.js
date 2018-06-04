import React, { Component } from 'react';
import Contact from './Contact.js';

const Contacts = (props) => (
	<div className="page contacts">
		<Contact/>
		<Contact/>
		<Contact/>
		<div className="bubble">add</div>
	</div>
)

export default Contacts;