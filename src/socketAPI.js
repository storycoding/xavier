const openSocket = require('socket.io-client')
const socket = openSocket('http://localhost:8000')

const socketAPI = {
	
	connect: function(credentials, cb) {

		socket.emit('login', credentials)

		socket.on('login response', (response) => {
			cb(response)
		})
	},

	publish: function(message, cb) {
		socket.emit('publish', message)

		socket.on('broadcast', (response) => {
			cb(response)
		})
	},

	getUserInfo: function(credentials, cb) {
		socket.emit('getUserInfo', credentials)

		socket.on('sendUserInfo', (response) => {
			cb(response)
		})
	},

	// setup getHistory
	getHistory: function(users, cb) {
		socket.emit('getHistory', users)

		socket.on('sendHistory', (response) => {
			cb(response)
		})
	}


	// setup sendMessage

	// setup sendWriting

	// setup getWriting
}

module.exports = { socketAPI : socketAPI } 