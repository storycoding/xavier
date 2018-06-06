const { socketAPI } = require('../server/socketAPI.js');

socketAPI.connect({
	username : "Laura",
	password : "password"
}, console.log);

socketAPI.send({publisher: "Laura", content: "Hi Rob!"}, console.log);