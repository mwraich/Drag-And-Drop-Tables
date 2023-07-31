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
				accessor: (user) => getFullName(user),
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
				accessor: (user) => getDaysSinceRegistered(user),
			},
		],
		[],
	);
	// Create an instance of the table
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data: users });

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
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					return (
						<tr {...row.getRowProps()}>
							{row.cells.map((cell) => (
								<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
							))}
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default UsersTable;
