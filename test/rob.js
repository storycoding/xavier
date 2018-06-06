const { socketAPI } = require('../server/socketAPI.js');

socketAPI.connect({
	username : "Rob",
	password : "password"
}, console.log);

socketAPI.send({publisher: "Rob", content: "Hello!"}, console.log);