const express = require('express');

const { getAllTasks } = require('./tasks.controller');

const tasksRouter = express.Router();

tasksRouter.get('/', getAllTasks);

module.exports = tasksRouter;
