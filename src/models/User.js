import { faker } from '@faker-js/faker';

class User {
	constructor() {
		this.id = faker.string.uuid();
		this.firstName = faker.person.firstName();
		this.lastName = faker.person.lastName();
		this.email = faker.internet.email();
		this.city = faker.location.city();
		this.registeredDate = faker.date.past();
	}
}

export default User;
