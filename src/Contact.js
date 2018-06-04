import React from 'react';

const Contact = (props) => {

	const goToPage = () => { props.goToPage("Chat") }
	// how do I determine which contact is rendered? - solve

	return <div className="bubble contact" onClick={goToPage}>{props.username}</div>
}

export default Contact;