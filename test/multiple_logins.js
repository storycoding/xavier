const io = require('socket.io-client')
const IP = process.env.url || 'http://localhost:'
const PORT = process.env.port || '8000'
const URL = IP + PORT
const socket1 = io(URL, { forceNew: true })
const socket2 = io(URL, { forceNew: true })

const testLogin1 = {
	login: function(credentials, done) {
		socket1.emit('login', credentials)
		socket1.on( 'login approved', () => done('login successful') )
		socket1.on( 'login denied', (error) => done(error) )
	}
}

const testLogin2 = {
	login: function(credentials, done) {
		socket2.emit('login', credentials)
		socket2.on( 'login approved', () => done('login successful') )
		socket2.on( 'login denied', (error) => done(error) )
	}
}


//======== quick tests =======//

testLogin1.login({
		email : 'rob@hotmail.com',
		password : 'password'
	}, console.log)


testLogin2.login({
		email : 'laura@hotmail.com',
		password : 'password'
	}, console.log)