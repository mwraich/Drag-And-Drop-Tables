import './Table.css';

const Table = ({ users }) => {
	const UserRows = ({ users }) => {
		const userRows = [];
		users.map((user) => {
			userRows.push(
				<tr>
					<td>{user.id}</td>
					<td>{user.firstName}</td>
					<td>{user.lastName}</td>
					<td>FULL NAME</td>
					<td>{user.email}</td>
					<td>{user.city}</td>
					<td>{user.registeredDate}</td>
					<td>DSR</td>
				</tr>
			);
		});
		return userRows;
	};
	return (
		<table>
			<thead>
				<tr>
					<th>ID</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Full Name</th>
					<th>Email</th>
					<th>City</th>
					<th>Registered Date</th>
					<th>Days Since Registered</th>
				</tr>
			</thead>
			<tbody>
				<UserRows users={users} />
			</tbody>
		</table>
	);
};

export default Table;
