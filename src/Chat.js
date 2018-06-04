import React from 'react';

import ChatBox from './ChatBox.js';
import History from './History.js';
import WritingContainer from './WritingContainer.js';

const Chat = (props) => {
	// consider holding state in the parent app component

	// displays contact name

	// return button

	// chat history

	// chat input box
	const goToPage = () => { props.goToPage("Contacts") }

	return (
		<div className="page chat">
			<div className="chatContact">
				<div className="arrow" onClick={goToPage}>←</div>
				contact name
			</div>
			<div className="flexEnd">
				<div className="scroll">
					<History/>
					<WritingContainer/>
				</div>
				<ChatBox/>
			</div>
			
		</div>
	)
}

export default Chat;