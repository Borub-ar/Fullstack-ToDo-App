const path = require('path');

const express = require('express');
const cors = require('cors');

const tasksRouter = require('./routes/tasks/tasks.router');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/task', tasksRouter);

app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = app;
