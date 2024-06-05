<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
# Task Management Dashboard

## Description

The **Task Management Dashboard** is an interactive web application built with React that allows users to manage tasks in different states: **To do**, **Doing**, and **Done**. Users can add, move, and delete tasks through a visually appealing and functional interface. Tasks are stored in a simulated database using JSON Server, ensuring data persistence between sessions.

## Features

- **Add Tasks**: Users can add new tasks to the **To do** column.
- **Move Tasks**: Tasks can be moved between the **To do**, **Doing**, and **Done** columns.
- **Delete Tasks**: Tasks can be deleted from any column.
- **Data Persistence**: Tasks are stored in a simulated database using JSON Server.

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: JSON Server (to simulate a database)
- **HTTP Client**: Axios

## Installation and Running

Follow these steps to clone and run the project locally.

### Prerequisites

- Node.js and npm (Node Package Manager) installed.
- JSON Server installed globally (`npm install -g json-server`).

### Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/task-management-dashboard.git
    cd task-management-dashboard
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start JSON Server:
    ```bash
    json-server --watch db.json --port 5000
    ```

4. Start the React application:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000` to see the application in action.

## Project Structure

- `src/`: Contains the React source files.
  - `App.js`: Main component of the application.
  - `index.js`: Entry point of the application.
  - `index.css`: Styling file using Tailwind CSS.
- `db.json`: Simulated database for JSON Server.



>>>>>>> a07503373a969ba257e7258b14d1a6b461d90f70
