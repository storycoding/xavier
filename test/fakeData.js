const accounts = {
	'rob@hotmail.com' : {
		name: 'Rob',
		email: 'rob@hotmail.com',
		password: 'password'
	},

	'laura@hotmail.com' : {
		name: 'Laura',
		email: 'laura@hotmail.com',
		password: 'password'
	},

	'distracted@hotmail.com' : {
		name: 'Distracted',
		email: 'distracted@hotmail.com',
		password: 'password'
	},

	'forgetful@hotmail.com' : {
		name: 'Forgetful',
		email: 'forgetful@hotmail.com',
		password: 'password'
	}
}

const message = {
	publisher_id: 1,
	subscriber_id: 2,
	content: 'test 123',
	date: 1
}

const video = {
	publisher_id: 2,
	subscriber_id: 1,
	link: 'https://youtu.be/TA9LVzuC7z4',
	length: 2702,
	date: 2
}

const image = {
	publisher_id: 1,
	subscriber_id: 2,
	link: 'https://i.imgur.com/Tgywof3.jpg',
	width: 460,
	height: 460,
	date: 3
}

const history = [
	message,
	video,
	image
]

module.exports = {
	accounts : accounts,
	history : history
}

console.log(history, accounts)