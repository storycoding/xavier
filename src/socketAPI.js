const openSocket = require('socket.io-client')
const socket = openSocket('http://localhost:8000')

const socketAPI = {
	
	registerForUpdates: function( Publisher, Subscriber, History, Contacts) {
		socket.on('login approved', (loginInfo) => Publisher(loginInfo) )
		socket.on('login denied', (error) => console.log(error) )
		socket.on('broadcast history', (history) => History(history) )
		socket.on('broadcast contacts', (contacts) => Contacts(contacts) )
	},

	registerForInput: function (updateInput) {
		socket.on('broadcast input', (input) => updateInput(input) )
	},

	login: function(credentials) {
		socket.emit('login', credentials)
	},

	getHistory: function(users) {
		socket.emit('get history', users)
	},

	sendMessage: function(message) {
		socket.emit('send message', message)	
	},

	sendInput: function(input) {
		socket.emit('send input', input)
	},

	getContacts: function() {
		socket.emit('get contacts')
	},

	searchContact: function(email) {
		socket.emit('search contacts')
	}
}

module.exports = { socketAPI : socketAPI }