const openSocket = require('socket.io-client')
const socket = openSocket('http://localhost:8000')

const socketAPI = {
	
	connect: function(credentials, cb) {
		socket.emit('login', credentials)

		socket.on('login response', (response) => {
			cb(response)
		})
	},

	sendMessage: function(message, cb) {
		socket.emit('sendMessage', message)

		socket.on('broadcastMessage', (response) => {
			cb(response)
		})
	},

	getUserInfo: function(credentials, cb) {
		socket.emit('getUserInfo', credentials)

		socket.on('sendUserInfo', (response) => {
			cb(response)
		})
	},

	getMessages: function(users, cb) {
		socket.emit('getMessages', users)

		socket.on('sendMessages', (response) => {
			cb(response)
		})
	},

	sendInput: function(input, cb) {
		socket.emit('sendInput', input)

		socket.on('broadcastInput', (response) => {
			cb(response)
		})
	}
}

module.exports = { socketAPI : socketAPI } 