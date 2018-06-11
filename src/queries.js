const knex = require('knex')({
    client: 'pg',
    connection: {
      	host: process.env.HOST || '127.0.0.1', 
      	user: process.env.USER || 'nunoneves', 
      	hash: process.env.hash || '', 
      	database: process.env.DATABASE || 'xavier'
    }
})

const insertAccount = function(credentials, cb) {
	knex
	.insert(credentials)
	.into('accounts')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const selectAccount = function(credentials, cb) {
	knex
	.select('id', 'name')
	.from('accounts')
	.where('hash', '=', credentials.hash)
	.andWhere('email', '=', credentials.email)
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const insertConnection = function(a, b, cb) {
	knex
	.insert( {from_id: a.id , id: b.id, name: b.name} )
	.into('connections')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )

	knex
	.insert( {from_id: b.id , id: a.id, name: a.name} )
	.into('connections')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const selectConnections = function(id, cb) {
	knex
	.select('id', 'name')
	.from('connections')
	.where('from_id', '=', id)
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const insertMessage = function(message, cb) {
	knex
	.insert(message)
	.into('messages')
	.then( (result)=> cb(result) )
	.catch( (error)=> cb(error) )
}

const selectMessages = function(a, b, cb) {
	knex
	.select('publisher_id', 'content')
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
  	insertAccount: insertAccount,
  	selectAccount: selectAccount,
  	insertConnection: insertConnection,
  	selectConnections: selectConnections,
  	insertMessage: insertMessage,
  	selectMessages: selectMessages
}