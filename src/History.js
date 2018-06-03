import React from 'react';
import ChatBubble from './ChatBubble.js';

const History = (props) => (
	<div className="history">
		<ChatBubble/>
		<ChatBubble/>
		<ChatBubble/>
		<ChatBubble/>
	</div>
);

export default History;