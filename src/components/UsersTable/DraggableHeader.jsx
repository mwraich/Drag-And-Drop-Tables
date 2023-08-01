import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// Can modify this later to change type so it's more re-usable
const useDragAndDrop = (dragItem, dropHandler, collect) => {
	const [{ opacity }, dragRef] = useDrag(() => ({
		type: 'column',
		item: dragItem,
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.5 : 1,
			...collect?.(monitor),
		}),
	}));

	const [, dropRef] = useDrop({
		accept: 'column',
		drop: dropHandler,
	});

	return [opacity, dragRef, dropRef];
};

const reorderColumn = (draggedColumnId, dropColumnId, columnOrder) => {
	const draggedColumnIndex = columnOrder.indexOf(draggedColumnId);
	const dropColumnIndex = columnOrder.indexOf(dropColumnId);

	const newColumnOrder = [
		...columnOrder.slice(0, draggedColumnIndex),
		...columnOrder.slice(draggedColumnIndex + 1),
	];

	newColumnOrder.splice(dropColumnIndex, 0, draggedColumnId);

	return newColumnOrder;
};

// Create a DraggableHeader
const DraggableHeader = ({ column, columnOrder, setColumnOrder }) => {
	const dropHandler = (draggedColumn) => {
		const newColumnOrder = reorderColumn(
			draggedColumn.id,
			column.id,
			columnOrder,
		);
		setColumnOrder(newColumnOrder);
	};

	const [opacity, dragRef, dropRef] = useDragAndDrop(column, dropHandler);

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
			<button ref={dragRef}>X</button>
		</th>
	);
};

function DragAndDropHeader({ ...props }) {
	return (
		<DndProvider backend={HTML5Backend}>
			<DraggableHeader {...props} />
		</DndProvider>
	);
}

export default DragAndDropHeader;
