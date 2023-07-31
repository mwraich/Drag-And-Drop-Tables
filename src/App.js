import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table/Table';
import { createUsers } from './utils/createUser';
function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const storedUsers = localStorage.getItem('users');

		if (storedUsers) {
			setUsers(JSON.parse(storedUsers));
		} else {
			const newUsers = createUsers(500);
			setUsers(newUsers);
			localStorage.setItem('users', JSON.stringify(newUsers));
		}
	}, []);

	return (
		<div>
			{users.map((user) => (
				<div key={user.id}>{user.firstName}</div>
			))}
			{/* <Table /> */}
		</div>
	);
}

export default App;
