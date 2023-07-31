import { useMemo } from 'react';
import { useTable } from 'react-table';
import { getFullName, getDaysSinceRegistered } from '../../helpers/users';
import './UsersTable.css';

const UsersTable = ({ users }) => {
	// Define the structure of table columns
	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'First Name',
				accessor: 'firstName',
			},
			{
				Header: 'FullName',
				accessor: (user) => {getFullName(user)},
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
			},
			{
				Header: 'Email',
				accessor: 'email',
			},
			{
				Header: 'City',
				accessor: 'city',
			},
			{
				Header: 'Registered Date',
				accessor: 'registeredDate',
			},
			{
				Header: 'DSR',
				accessor: (user => {getDaysSinceRegistered(user)}),
			},
		],
		[],
	);
	const UserRows = ({ users }) => {
		const userRows = [];
		users.map((user) => {
			userRows.push(
				<tr key={user.id}>
					<td>{user.id}</td>
					<td>{user.firstName}</td>
					<td>{user.lastName}</td>
					<td>{getFullName(user)}</td>
					<td>{user.email}</td>
					<td>{user.city}</td>
					<td>{user.registeredDate}</td>
					<td>{getDaysSinceRegistered(user)}</td>
				</tr>,
			);
		});
		return userRows;
	};

	// Create an instance of the table
	const { getTableProps, headerGroups } = useTable({ columns, data: users });

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<th {...column.getHeaderProps()}>{column.render('Header')}</th>
						))}
					</tr>
				))}
			</thead>
			<tbody>
				<UserRows users={users} />
			</tbody>
		</table>
	);
};

export default UsersTable;
