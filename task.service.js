const repo = require("../repositories/task.repository");

const getAllTasks = async () => {
  const result = await repo.getAllTasks();
  return result.rows;
};

const getTaskById = async (id) => {
  const result = await repo.getTaskById(id);

  if(result.rows.length === 0) {
    const err = new Error('Task not found!');
    err.status = 404;
    throw err;
  }

  return result.rows[0];
};

const createTask = async ({ title, description, userId }) => {
  if(!title || !description || !userId) {
    const err = new Error('Task not found');
    err.status = 404;
    throw err;
  }
};

const updateTask = async (id, { title, description, userId }) => {
  const result = await repo.updateTask(id, title, description, userId);

  if(result.rows.length === 0) {
    const err = new Error('Task not found!');
    err.status = 404;
    throw err;
  }

  return result.rows[0];
};

const deleteTask = async (id) => {
  const result = await repo.deleteTask(id);
  return result.rows[0];
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};