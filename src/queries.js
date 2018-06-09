const knex = require('knex')({
    client: 'pg',
    connection: {
      	host: process.env.HOST || '127.0.0.1', 
      	user: process.env.USER || 'nunoneves', 
      	password: process.env.PASSWORD || '', 
      	database: process.env.DATABASE || 'xavier'
    }
})

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

const getUserInfo = function(email, cb) {
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

module.exports = {
  getMessages: getMessages,
  getUserInfo: getUserInfo,
  getConnections: getConnections
}