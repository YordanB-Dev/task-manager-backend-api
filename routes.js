const express = require('express');
const router = express.Router();

const userController = require('./controllers/user.controller');
const authMiddleware = require('./middleware/auth.middleware');
const taskController = require('./controllers/task.controller');

// AUTH
router.post('/auth/register', userController.register);
router.post('/auth/login', userController.login);

// PROTECTED TASK ROUTES
const validateTask = require('./middleware/validateTask');

router.post('/task', authMiddleware, validateTask, taskController.createTask);
router.put('/task/:id', authMiddleware, validateTask, taskController.updateTask);
router.delete('/task/:id', authMiddleware, taskController.deleteTask);

// PUBLIC
router.get('/task', taskController.getAllTasks);
router.get('/task/:id', taskController.getTaskById);

module.exports = router;