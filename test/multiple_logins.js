const { socketAPI } = require('../server/socketAPI.js');

const log = console.log;

socketAPI.connect({
		username : "Morris",
		password : "password"
	}, log);

socketAPI.connect({
		username : "Al",
		password : "password"
	}, log);

socketAPI.connect({
		username : "Rob",
		password : "password"
	}, log);

socketAPI.connect({
		username : "Kurt",
		password : "password"
	}, log);