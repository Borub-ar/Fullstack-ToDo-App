const Task = require('./tasks.mongo');

async function getAllTasks() {
  return Task.find({});
}

async function createNewTask(task) {
  const newTask = new Task(task);
  await newTask.save();
}

module.exports = {
  getAllTasks,
  createNewTask,
};
