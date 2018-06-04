import React from 'react';

const ChatBubble = (props) => {
	if(props.author === "self" ) {
		return <div className="self bubble">{props.content}</div>
	}

	return <div className="other bubble">{props.content}</div>
}

export default ChatBubble;