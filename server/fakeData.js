const fakeAuth = {
	'rob@gmail.com' : {
		name: 'Rob',
		email: 'rob@gmail.com',
		password: 'password',
		contacts: ["Laura"]
	},

	'laura@gmail.com' : {
		name: 'Laura',
		email: 'laura@gmail.com',
		password: 'password',
		contacts: ["Rob"]
	},

	'distracted@gmail.com' : {
		name: 'Distracted',
		email: 'distracted@gmail.com',
		password: 'password',
		contacts: []
	},

	'forgetful@gmail.com' : {
		name: 'Forgetful',
		email: 'forgetful@gmail.com',
		password: 'password',
		contacts: []
	}
}

const fakeHistory = [
	{ 
        publisher: 2,
        content: "How are you?"
	 },
	 {
        publisher: 1,
        content: "All good in the hood. You?"
     },
     {
        publisher: 2,
        content: "Peachy!"
     }
]

module.exports = {
	fakeAuth : fakeAuth,
	fakeHistory : fakeHistory
}