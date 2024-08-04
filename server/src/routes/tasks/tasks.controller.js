const { getAllTasks, createNewTask } = require('../../models/tasks.model');

async function httpGetAllTasks(req, res) {
  const allTasks = await getAllTasks();

  if (!!allTasks.length) {
    return res.status(200).json(allTasks);
  }

  return res.status(200).json([]);
}

async function httpAddNewTask(req, res) {
  await createNewTask();
  return res.status(200).json({ text });
}

module.exports = {
  httpGetAllTasks,
  httpAddNewTask,
};
