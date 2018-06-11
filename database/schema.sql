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

CREATE TABLE videos (
	id SERIAL PRIMARY KEY,
	publisher_id INT NOT NULL,
	subscriber_id INT NOT NULL,
	link VARCHAR NOT NULL,
	length INT,
	date_sent TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

CREATE TABLE images (
	id SERIAL PRIMARY KEY,
	publisher_id INT NOT NULL,
	subscriber_id INT NOT NULL,
	link VARCHAR NOT NULL,
	width INT NOT NULL,
	height INT NOT NULL,
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

INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '3' , '1' , 'Finally going on a Holiday!' );
INSERT INTO images (publisher_id, subscriber_id, link, width, height) VALUES ('3', '1', 'https://i.imgur.com/Tgywof3.jpg', '640', '640');
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '1' , '3' , 'Take me with you!' );


INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '2' , '3' , 'M8 check this out' );
INSERT INTO videos (publisher_id, subscriber_id, link, length) VALUES ('2', '3', 'https://youtu.be/TA9LVzuC7z4', '2702');
INSERT INTO messages (publisher_id, subscriber_id, content) VALUES ( '3' , '2' , 'Busy now, driving!' );
