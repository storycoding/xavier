const io = require('socket.io')();
const socketAPI = require('./socketAPI.js').socketAPI;

const port = process.env.port || 8000;

server = {};

// setup server cache

io.on('connection', (client) => {

	// setup connect

	// setup getHistory

	// setup sendMessage

	// setup sendWriting

	// setup getWriting

	// setup disconnect

};



io.listen(port);
console.log('listening on port ', port);