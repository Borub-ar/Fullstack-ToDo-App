function getAllTasks(req, res) {
  return res.status(200).json(['Task1, Task2']);
}

module.exports = {
  getAllTasks,
};
