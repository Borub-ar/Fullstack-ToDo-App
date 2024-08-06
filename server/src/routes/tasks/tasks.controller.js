const { getAllTasks, createNewTask } = require('../../models/tasks.model');

async function httpGetAllTasks(req, res) {
  const allTasks = await getAllTasks();
  return res.status(200).json(!!allTasks.length ? allTasks : []);
}

async function httpAddNewTask(req, res) {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      taskId: req.body.taskId,
    };

  await createNewTask(newTask);
  return res.status(200).json({ text });
}

module.exports = {
  httpGetAllTasks,
  httpAddNewTask,
};
