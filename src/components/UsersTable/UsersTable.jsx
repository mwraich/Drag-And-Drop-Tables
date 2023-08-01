import { useMemo, useState } from 'react';
import { useSortBy, useTable } from 'react-table';
import { getFullName, getDaysSinceRegistered } from '../../helpers/users';
import DragAndDropHeader from './DraggableHeader';
import './UsersTable.css';

const UsersTable = ({ users }) => {
	// Define the structure of table columns
	const columns = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
				id: 'id',
			},
			{
				Header: 'First Name',
				accessor: 'firstName',
				id: 'firstName',
			},
			{
				Header: 'FullName',
				accessor: (user) => getFullName(user),
				id: 'FullName',
			},
			{
				Header: 'Last Name',
				accessor: 'lastName',
				id: 'lastName',
			},
			{
				Header: 'Email',
				accessor: 'email',
				id: 'email',
			},
			{
				Header: 'City',
				accessor: 'city',
				id: 'city',
			},
			{
				Header: 'Registered Date',
				accessor: 'registeredDate',
				id: 'registeredDate',
			},
			{
				Header: 'DSR',
				accessor: (user) => getDaysSinceRegistered(user),
				id: 'daysSinceRegistered',
			},
		],
		[],
	);

	const [columnOrder, setColumnOrder] = useState(columns.map((col) => col.id));

	const orderedColumns = useMemo(() => {
		return columnOrder.map((id) => columns.find((col) => col.id === id));
	}, [columnOrder]);

	// Create an instance of the table
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: orderedColumns, data: users }, useSortBy);

	const TableHeaders = () => (
		<thead>
			{headerGroups.map((headerGroup) => (
				<tr {...headerGroup.getHeaderGroupProps()}>
					{headerGroup.headers.map((column) => (
						<DragAndDropHeader
							key={column.id}
							column={column}
							columnOrder={columnOrder}
							setColumnOrder={setColumnOrder}
						/>
					))}
				</tr>
			))}
		</thead>
	);

	const TableBody = () => (
		<tbody {...getTableBodyProps()}>
			{rows.map((row) => {
				prepareRow(row);
				return (
					<tr key={row.id} {...row.getRowProps()}>
						{row.cells.map((cell) => (
							<td key={cell.id} {...cell.getCellProps()}>
								{cell.render('Cell')}
							</td>
						))}
					</tr>
				);
			})}
		</tbody>
	);
	return (
		<table {...getTableProps()}>
			<TableHeaders />
			<TableBody />
		</table>
	);
};

export default UsersTable;
