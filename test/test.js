const { socketAPI } = require('../server/socketAPI.js');
const assert = require('assert');

const users = [
	{
		username : "Distracted",
		password : ""
	},
	{
		username : "Forgetful",
		password : "wrongPassowrd"
	},
	{
		username : "Rob",
		password : "password"
	},
	{
		username : "Laura",
		password : "password"
	}
]


// mocha does not support multiple async calls with done()
	// each test would have to be done separately
	// try jest

describe('Chat server', function() {

	/*
	describe('check if server is running', function() {
    it('server should be running', function(done) {
    	// ping server here
    	done();
    });
  });

  describe('user logs in without a password', function() {
    it('should fail to connect', function(done) {
    	socketAPI.connect(users[0], done);
    });
  });

  describe('user logs in with wrong password', function() {
    it('should fail to connect', function(done) {
    	socketAPI.connect(users[1], done);
    });
  });
	*/
  
   describe('user logs in', function() {
    it('should connect to server', function(done) {
    	socketAPI.connect(users[2], done);
    });
  });

  // when the first user logs in
  	// the socket ignores all other logins from the same origin
  	// therefore, the following test should fail

  /*
  describe('second user logs in', function() {
    it('should fail to connect', function(done) {
    	socketAPI.connect(users[3], done);
    });
  });

  describe('check if server is still running', function() {
    it('server should still be running', function(done) {
    	// ping server here
    	done();
    });
  });
  */

});