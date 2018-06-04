import React from 'react';

// presentational component of a single contact

const Contact = (props) => {

	const goToPage = () => { props.goToPage("Chat") }

	return <div className="bubble contact" onClick={goToPage}>contact</div>
}

// should display contact username
// could have last message in chat history

export default Contact;