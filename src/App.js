import { useEffect, useState } from 'react';
import './App.css';
import Table from './components/UsersTable/UsersTable';
import { createUsers } from './utils/createUser';
function App() {
	const [users, setUsers] = useState([]);
	useEffect(() => {
    // Initialize user creation once upon app load, and then have it
    // persist in localStorage
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
      <h1>Drag Until You Drop Columns</h1>
			<Table users={users} />
		</div>
	);
}

export default App;
