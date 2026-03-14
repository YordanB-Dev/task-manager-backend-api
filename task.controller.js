const asyncHandeler = require("../middleware/asyncHandler");
const Service = require("../services/task.service");

const getAllTasks = asyncHandeler(async (req, res) => {
    const tasks = await Service.getAllTasks();
    return res.json(tasks);
});

const getTaskById = asyncHandeler(async (req, res) => {
    const tasks = await Service.getTaskById(req.params.id);
    return res.json(tasks);
});

const createTask = asyncHandeler(async (req, res) => {
    const tasks = await Service.createTask(req.body);
    return res.status(201).json(tasks)
});

const updateTask = asyncHandeler(async (req, res) => {
    const tasks = await Service.updateTask(req.params.id, req.body);
    return res.json(tasks); 
});

const deleteTask = asyncHandeler(async (req, res) => {
    await Service.deleteTask(req.params.id)
    return res.status(201).send();
});

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};