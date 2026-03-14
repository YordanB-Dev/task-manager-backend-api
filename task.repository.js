const db = require("../db");

const getAllTasks = async () => {
  return db.query(
    `SELECT * FROM tasks`
  )
};

const getTaskById = async (id) => {
  return db.query(
    `SELECT * FROM tasks WHERE id = $1`,
    [id]
  )
};

const createTask = async (title, description, userId) => {
  return db.query(
    `INSERT INTO tasks (title, description, userId) VALUES ($1, $2, $3) RETURNING *`,
    [title, description, userId]
  );
};

const updateTask = async (id, title, description, userId) => {
  return db.query(
    `UPDATE tasks SET title = $1, description = $2, userId = $3 WHERE id = $4 RETURNING *`,
    [title, description, userId, id]
  );
};

const deleteTask = async (id) => {
  return db.query(
    `DELETE FROM tasks WHERE id = $1`,
    [id]
  );
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};