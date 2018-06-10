DROP DATABASE xavier;

CREATE DATABASE xavier;
\c xavier;

CREATE TABLE accounts (
	id SERIAL PRIMARY KEY,
	email VARCHAR UNIQUE NOT NULL,
	name VARCHAR NOT NULL,
	hash VARCHAR NOT NULL
);

CREATE TABLE connections (
	a_id INT NOT NULL,
	b_id INT NOT NULL,
	b_name VARCHAR NOT NULL
);

CREATE TABLE messages (
	id SERIAL PRIMARY KEY,
	publisher_id INT NOT NULL,
	subscriber_id INT NOT NULL,
	content VARCHAR NOT NULL,
	date_sent TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

INSERT INTO accounts(email, name, hash) VALUES ('laura@hotmail.com','Laura', 'hash');
INSERT INTO accounts(email, name, hash) VALUES ('rob@hotmail.com','Rob', 'hash');
INSERT INTO accounts(email, name, hash) VALUES ('ollie@hotmail.com','Ollie', 'hash');
INSERT INTO accounts(email, name, hash) VALUES ('susan@hotmail.com','Susan', 'hash');

INSERT INTO connections(a_id, b_id, b_name) VALUES ( (SELECT id FROM accounts WHERE name = 'Laura') , (SELECT id FROM accounts WHERE name = 'Rob'), 'Rob' );
INSERT INTO connections(a_id, b_id, b_name) VALUES ( (SELECT id FROM accounts WHERE name = 'Rob') , (SELECT id FROM accounts WHERE name = 'Laura'), 'Laura' );

INSERT INTO connections(a_id, b_id, b_name) VALUES ( (SELECT id FROM accounts WHERE name = 'Ollie') , (SELECT id FROM accounts WHERE name = 'Rob'), 'Rob' );
INSERT INTO connections(a_id, b_id, b_name) VALUES ( (SELECT id FROM accounts WHERE name = 'Rob') , (SELECT id FROM accounts WHERE name = 'Ollie'), 'Ollie' );

INSERT INTO connections(a_id, b_id, b_name) VALUES ( (SELECT id FROM accounts WHERE name = 'Laura') , (SELECT id FROM accounts WHERE name = 'Susan'), 'Susan' );
INSERT INTO connections(a_id, b_id, b_name) VALUES ( (SELECT id FROM accounts WHERE name = 'Susan') , (SELECT id FROM accounts WHERE name = 'Laura'), 'Laura' );

INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '1' , '2' , 'Hey dude, how you doin?' );
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '2' , '1' , 'Peachy. How are you Laura?' );
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '1' , '2' , 'Not gonna lie, this hayfever is not making it easy!' );
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '2' , '1' , 'I got just the thing for it.' );
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '1' , '2' , 'And what would that be?' );
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '2' , '1' , 'Lets go SURFING!' );
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '1' , '2' , ':D' );