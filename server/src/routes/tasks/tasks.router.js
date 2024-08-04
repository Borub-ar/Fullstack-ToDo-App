const express = require('express');

const { httpGetAllTasks } = require('./tasks.controller');

const tasksRouter = express.Router();

tasksRouter.get('/', httpGetAllTasks);

module.exports = tasksRouter;
