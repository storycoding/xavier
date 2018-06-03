import React from 'react';

import ChatInputBox from './ChatInputBox.js';
import History from './History.js';
import WritingContainer from './WritingContainer.js';

const Chat = (props) => {
	// consider holding state in the parent app component

	// displays contact name

	// return button

	// chat history

	// chat input box

	return (
		<div className="chat">
			(Chat)
			<div>contact name</div>
			<History/>
			<WritingContainer/>
			<ChatInputBox/>
		</div>
	)
}

export default Chat;