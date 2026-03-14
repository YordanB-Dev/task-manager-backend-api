# Task Manager Backend API

A RESTful backend API for managing tasks with user authentication.

This project demonstrates a clean backend architecture using Node.js, Express and PostgreSQL. It includes user registration, login with JWT authentication, and protected routes for task management.

---

## Features

- User registration with email and password
- Secure password hashing with bcrypt
- JWT authentication
- Protected routes
- CRUD operations for tasks
- Task status management
- Layered architecture (Controller / Service / Repository)
- Async error handling middleware
- Centralized error handling
- Request logging middleware
- Environment-based configuration using dotenv

---

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## Project Structure

controllers/
task.controller.js
user.controller.js

services/
task.service.js
user.service.js

repositories/
task.repository.js
user.repository.js

middleware/
auth.middleware.js
asyncHandler.js
errorHandler.js
logger.js
validateTask.js

app.js
server.js
db.js
routes.js

---


---

## API Endpoints

### Authentication

Register new user

POST /api/auth/register

Login user

POST /api/auth/login

---

### Tasks

Get all tasks

GET /api/tasks

Get task by id

GET /api/tasks/:id

Create new task (Protected)

POST /api/tasks

Update task (Protected)

PUT /api/tasks/:id

Delete task (Protected)

DELETE /api/tasks/:id

---

## Environment Variables

Create a `.env` file in the root directory.

Example configuration:

PORT=3000

DB_HOST=localhost  
DB_USER=postgres  
DB_PASSWORD=yourpassword  
DB_NAME=yourdatabase  
DB_PORT=5432  

JWT_SECRET=your_secret_key  
JWT_EXPIRES_IN=1h

---

## Installation

Clone the repository

git clone https://github.com/yourusername/task-manager-backend-api.git

Install dependencies

npm install

---

## Run the Server

Start the server

node server.js

The server will run on:

http://localhost:3000

---

## Example Request

Create a task

POST /api/tasks

{
"title": "Finish backend project",
"description": "Implement JWT authentication",
"status": "pending"
}

---

## Author

Backend Developer Portfolio Project

Developed by Yordan Borisov
