const Task = require('./tasks.mongo');

async function getAllTasks() {
  return Task.find({});
}

async function createNewTask(task) {
    const task = new Task(task);
    await task.save();
}

module.exports = {
  getAllTasks,
  createNewTask,
};
