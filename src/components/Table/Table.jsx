import './Table.css';

const Table = () => {
	const UserRows = () => {
		const userRows = [];
		for (let i = 0; i < 100; i++) {
			userRows.push(
				<tr>
					<td>1</td>
					<td>John</td>
					<td>Doe</td>
					<td>John Doe</td>
					<td>johndoe@example.com</td>
					<td>New York</td>
					<td>2022-10-22</td>
					<td>100</td>
				</tr>
			);
		}
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
				<UserRows />
			</tbody>
		</table>
	);
};

export default Table;
