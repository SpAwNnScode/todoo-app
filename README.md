# ToDo List App

A simple full-stack ToDo List application with separate backend and frontend services, orchestrated using Docker Compose. This project enables users to manage tasks through a user-friendly interface while leveraging Docker for simplified development and deployment.

## Features
- **Task Management**: Create, read, update, and delete tasks.
- **Full-stack Architecture**: Dedicated backend service for API handling and a React-based frontend for the user interface.
- **Dockerized Environment**: Easy setup and deployment using Docker Compose.
- **PostgreSQL Database**: Persistent data storage using a PostgreSQL container.

## Technology Stack
- **Backend**: Node.js with Express.js
- **Frontend**: React.js
- **Database**: PostgreSQL 15, pre-configured with initialization SQL

## Prerequisites
Ensure you have the following installed before proceeding:
- **Docker** (v20.10 or later)
- **Docker Compose** (v1.27 or later)
- **Git**

## Getting Started
Follow these steps to set up and run the application locally.

### 1. Clone the Repository
```sh
git clone https://github.com/SpAwNnScode/todoo-app.git
cd todoo-app
```

### 2. Run with Docker Compose
Build and run all services (backend, frontend, and database) with:
```sh
docker-compose up --build
```

### 3. Backend Service
- **PORT**: The backend server runs on port `3000` by default.
- **DATABASE_URL**: Connection string for PostgreSQL database.

### 4. Frontend Service
- **REACT_APP_API_URL**: URL for the backend API (set to `http://backend:3000` for internal Docker networking).

You can modify these variables in the Docker Compose configuration as needed.

## Development Mode (Without Docker)

### Running the Backend Locally
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```

### Running the Frontend Locally
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

**Note**: When running locally outside of Docker, update the API URL in the frontend configuration to match your backend’s local address.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to enhance this project.


