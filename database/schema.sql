DROP DATABASE xavier;

CREATE DATABASE xavier;
\c xavier;

CREATE TABLE accounts (
	account_id SERIAL PRIMARY KEY,
	email VARCHAR NOT NULL,
	name VARCHAR NOT NULL,
	salt VARCHAR NOT NULL,
	password VARCHAR NOT NULL
);

CREATE TABLE connections (
	a_id INT NOT NULL,
	b_id INT NOT NULL,
	PRIMARY KEY (a_id)
);

CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	publisher_id INT NOT NULL,
	subscriber_id INT NOT NULL,
	content VARCHAR NOT NULL,
	date_sent TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO accounts(email, name, salt, password) VALUES ('laura@hotmail.com','Laura','salt', 'password');
INSERT INTO accounts(email, name, salt, password) VALUES ('rob@hotmail.com','Rob','salt', 'password');

INSERT INTO connections(a_id, b_id) VALUES ( (SELECT account_id FROM accounts WHERE name = 'Laura') , (SELECT account_id FROM accounts WHERE name = 'Rob') );
INSERT INTO connections(a_id, b_id) VALUES ( (SELECT account_id FROM accounts WHERE name = 'Rob') , (SELECT account_id FROM accounts WHERE name = 'Laura') );

INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( (SELECT account_id FROM accounts WHERE name = 'Laura') , (SELECT account_id FROM accounts WHERE name = 'Rob') , 'Hey dude, how you doin?' );
