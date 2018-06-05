CREATE DATABASE xavier;
\c xavier;

CREATE TABLE users (
	user_id VARCHAR NOT NULL,
	password VARCHAR NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE connections (
	user_id VARCHAR NOT NULL,
	connection_id VARCHAR NOT NULL,
	PRIMARY KEY (user_id)
);

CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	content VARCHAR NOT NULL,
	publisher_id VARCHAR NOT NULL,
	subscriber_id VARCHAR NOT NULL,
	date_sent TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO users(user_id, password) VALUES ('Laura', 'password');
INSERT INTO users(user_id, password) VALUES ('Rob', 'password');

INSERT INTO connections(user_id, connection_id) VALUES ('Laura', 'Rob');

INSERT INTO messages(content, publisher_id, subscriber_id) VALUES ('Hey dude, how you doin?', 'Laura', 'Rob');

INSERT INTO messages(content, publisher_id, subscriber_id) VALUES ('Not much, are we hitting the pub tonight or what?', 'Rob', 'Laura');