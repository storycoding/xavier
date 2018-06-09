const knex = require('knex')({
    client: 'pg',
    connection: {
      	host: process.env.HOST || '127.0.0.1', 
      	user: process.env.USER || 'nunoneves', 
      	password: process.env.PASSWORD || '', 
      	database: process.env.DATABASE || 'xavier'
    }
})


const addAccount = function(credentials, cb) {
	knex
	.insert(credentials)
	.into('accounts')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const addConnection = function(a, b, cb) {
	knex
	.insert( {a_id: a , b_id: b} )
	.into('connections')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )

	knex
	.insert( {a_id: b , b_id: a} )
	.into('connections')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const addMessage = function(message, cb) {
	knex
	.insert(message)
	.into('messages')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const getAccount = function(email, cb) {
	knex
	.select('account_id', 'email', 'name')
	.from('accounts')
	.where('email', '=', email)
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const getConnections = function(id, cb) {
	knex
	.select('b_id')
	.from('connections')
	.where('a_id', '=', id)
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const getMessages = function(a, b, cb) {
	knex
	.select('*')
	.from('messages')
	.where('publisher_id', '=', a)
	.andWhere('subscriber_id', '=', b)
	.orWhere('publisher_id', '=', b)
	.andWhere('subscriber_id', '=', a)
	.orderBy('date_sent')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}


module.exports = {
  addConnection: addAccount,
  addConnection: addConnection,
  addMessage: addMessage,
  getAccount: getAccount,
  getConnections: getConnections,
  getMessages: getMessages
}