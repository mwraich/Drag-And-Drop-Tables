import { faker } from '@faker-js/faker';

class User {
	constructor({ id, firstName, lastName, email, city, registeredDate }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.city = city;
		this.registeredDate = registeredDate;
	}

	static initializeFakeUser() {
		return new User({
			id: faker.string.uuid(),
			firstName: faker.person.firstName(),
			lastName: faker.person.lastName(),
			email: faker.internet.email(),
			city: faker.location.city(),
			registeredDate: faker.date.past(),
		});
	}
}

export default User;
