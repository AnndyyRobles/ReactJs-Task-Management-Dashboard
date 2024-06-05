# Task Management Dashboard

## Description

The **Task Management Dashboard** is an interactive web application built with React that allows users to manage tasks in different states: **To do**, **Doing**, and **Done**. Users can add, move, and delete tasks through a visually appealing and functional interface. Tasks are stored in a simulated database using JSON Server, ensuring data persistence between sessions.
![img1](https://github.com/AnndyyRobles/ReactJs-Task-Management-Dashboard/blob/main/IMG1.jpg)

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

