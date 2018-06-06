const { socketAPI } = require('../server/socketAPI.js');
const assert = require('assert');

const users = [
	{
		username : "Rob",
		password : "password"
	},
	{
		username : "Laura",
		password : "password"
	},
	{
		username : "Distracted",
		password : ""
	},
	{
		username : "Forgetful",
		password : "wrongPassowrd"
	}
]


describe('Chat server', function() {

	describe('check if server is running', function() {
    it('server should be running', function(done) {
    	// ping server here
    	done();
    });
  });

  describe('user logs in', function() {
    it('should connect to server', function(done) {
    	socketAPI.connect(users[0], done);
    });
  });

  describe('second user logs in', function() {
    it('should connect to server', function(done) {
    	socketAPI.connect(users[1], done);
    });
  });

  describe('third user logs in without a password', function() {
    it('should fail to connect', function(done) {
    	socketAPI.connect(users[2], done);
    });
  });

  describe('fourth user logs in with wrong password', function() {
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

});