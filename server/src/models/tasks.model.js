const tasksDatabase = require('./tasks.mongo');

async function getAllTasks() {
  console.log('All tasks returned');
}

async function createNewTask(task) {
  console.log('New task created');
}
