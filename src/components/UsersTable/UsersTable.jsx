import { useMemo, useState } from 'react';
import { useSortBy, useTable } from 'react-table';
import { getFullName, getDaysSinceRegistered } from '../../helpers/users';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
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

	const reorderColumn = (draggedColumnId, dropColumnId, columnOrder) => {
		// get the index of the dragged and drop columns
		const draggedColumnIndex = columnOrder.indexOf(draggedColumnId);
		const dropColumnIndex = columnOrder.indexOf(dropColumnId);

		// Remove the dragged column from the order
		const [draggedColumn] = columnOrder.splice(draggedColumnIndex, 1);

		// Add it back to it's new dropped position
		columnOrder.splice(dropColumnIndex, 0, draggedColumn);
		return [...columnOrder];
	};

	// Create a DraggableHeader
	const DraggableHeader = ({ column }) => {
		const [{ opacity }, drag] = useDrag(() => ({
			type: 'column',
			item: column,
			collect: (monitor) => ({
				opacity: monitor.isDragging() ? 0.5 : 1,
			}),
		}));

		const [, dropRef] = useDrop({
			accept: 'column',
			drop: (draggedColumn) => {
				const newColumnOrder = reorderColumn(
					draggedColumn.id,
					column.id,
					columnOrder,
				);
				setColumnOrder(newColumnOrder);
			},
		});

		return (
			<th
				ref={dropRef}
				{...column.getHeaderProps(column.getSortByToggleProps())}
				style={{ opacity }}
			>
				<span>
					{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
				</span>
				{column.render('Header')}
				<button ref={drag}>X</button>
			</th>
		);
	};
	// Create an instance of the table
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns: orderedColumns, data: users }, useSortBy);

	return (
		<table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => (
					<tr {...headerGroup.getHeaderGroupProps()}>
						{headerGroup.headers.map((column) => (
							<DraggableHeader key={column.id} column={column} />
						))}
					</tr>
				))}
			</thead>
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
		</table>
	);
};

function DnDUsersTable({ ...props }) {
	return (
		<DndProvider backend={HTML5Backend}>
			<UsersTable {...props} />
		</DndProvider>
	);
}
export default DnDUsersTable;
