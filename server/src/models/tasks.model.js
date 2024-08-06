const Task = require('./tasks.mongo');

async function getAllTasks() {
  return await Task.find({}, { __v: 0, _id: 0 });
}

async function createNewTask(task) {
  const newTask = new Task(task);
  await newTask.save();
}

module.exports = {
  getAllTasks,
  createNewTask,
};
