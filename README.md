ToDo App
A simple full-stack ToDo application with separate backend and frontend services, orchestrated with Docker Compose. This project allows you to manage tasks with a user-friendly interface, and it leverages Docker to simplify development and deployment.

Features
Task Management: Create, read, update, and delete to-do items.
Full-stack Architecture: A dedicated backend service for API handling and a React-based frontend for the user interface.
Dockerized Environment: Easy setup and deployment using Docker Compose.
PostgreSQL Database: Stores tasks and persists data using a Postgres container.
Technology Stack
Backend: Built from the code in the backend directory (likely Node.js/Express, check the code for specific details).
Frontend: Built from the code in the frontend directory (a React application using environment variables like REACT_APP_API_URL).
Database: PostgreSQL 15, pre-configured with initialization SQL (see ./backend/database.sql).
Prerequisites
Docker (v20.10 or later)
Docker Compose (v1.27 or later)
Git
Getting Started
Follow these steps to set up and run the application locally:

Clone the Repository

bash
Copy
Edit
git clone https://github.com/SpAwNnScode/todoo-app.git
cd todoo-app
Run Docker Compose

Build and run all services (backend, frontend, and PostgreSQL):

bash
Copy
Edit
docker-compose up --build
This command will:

Build the backend service from the ./backend directory and expose it on port 3000.
Build the frontend service from the ./frontend directory and expose it on port 3006.
Start a PostgreSQL container initialized with the SQL script located at ./backend/database.sql.
Access the Application

Frontend: Open your browser and navigate to http://localhost:3006 to view the user interface.
Backend API: The API endpoints are available at http://localhost:3000.
Configuration
The services are defined in the docker-compose.yaml file. Key environment variables include:

Backend Service:

PORT: Port on which the backend server runs (default is 3000).
DATABASE_URL: Connection string for the PostgreSQL database.
Frontend Service:

REACT_APP_API_URL: URL for the backend API (set to http://backend:3000 for internal Docker networking).
Feel free to modify these variables or the Docker Compose configuration as needed.

Development
Backend
Navigate to the backend directory.
Install dependencies and run the server locally (if you prefer not to use Docker during development).
Frontend
Navigate to the frontend directory.
Install dependencies using npm install or yarn install and run the development server with npm start or yarn start.
Note: When running locally outside Docker, make sure to update the API URL in the frontend to match your backend’s address.
