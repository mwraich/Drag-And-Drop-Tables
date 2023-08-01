# React Draggable Columns Table

A custom implementation of a table in React with sortable and draggable columns. The table utilizes React Table and React DnD for core functionalities.

1. [Table Features](#table-features)
2. [Implementation Details](#implementation-details)
   - [Draggable Columns](#draggable-columns)
   - [Sortable Columns](#sortable-columns)
3. [Consideration for Pagination](#consideration-for-pagination)
4. [Getting Started](#getting-started)

## Table Features

- **Draggable columns**: You can reorder columns by clicking and dragging.
- **Sortable columns**: Clicking on a column header will sort the data in that column in ascending or descending order.

## Implementation Details

### Draggable Columns

The draggable feature is achieved by using React DnD's `useDrag` and `useDrop` hooks. The drag source and drop target are implemented in the column header component.

### Sortable Columns

The sorting feature is powered by the `useSortBy` hook from React Table. Clicking on the column header will trigger a sort function on the corresponding column.

## Consideration for Pagination

React Table provides a `usePagination` hook which can be added to the table instance to split the data across multiple pages. The implementation would require adding controls for page navigation (next, previous, jump to page, etc.) and a method to handle page changes.

## Getting Started

1. Clone the repo: `git clone https://github.com/your-repo-url`
2. Install dependencies: `npm install`
3. Run the project: `npm start`
4. Visit `http://localhost:3000` in your browser

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
