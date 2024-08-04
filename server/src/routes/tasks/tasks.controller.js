const { getAllTasks } = require('../../models/tasks.model');

async function httpGetAllTasks(req, res) {
  const allTasks = await getAllTasks();

  if (!!allTasks.length) {
    return res.status(200).json(allTasks);
  }

  return res.status(200).json([]);
}

module.exports = {
  httpGetAllTasks,
};
