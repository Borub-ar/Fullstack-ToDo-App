const express = require('express');

const { httpGetAllTasks, httpAddNewTask } = require('./tasks.controller');

const tasksRouter = express.Router();

tasksRouter.get('/', httpGetAllTasks);
tasksRouter.post('/', httpAddNewTask);

module.exports = tasksRouter;
