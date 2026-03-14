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
