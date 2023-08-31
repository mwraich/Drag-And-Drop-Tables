import User from '../models/User';

export function createUsers(num) {
	const users = [];
	for (let i = 0; i < num; i++) {
		try {
			users.push(User.initializeFakeUser());
		} catch (error) {
			console.log(error);
		}
	}
	return users;
}
