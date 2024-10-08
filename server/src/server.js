const http = require('http');

require('dotenv').config();

const { mongoConnect } = require('./services/mongo');

const app = require('./app');

const PORT = 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();

  server.listen(PORT, () => {
    console.log('LISTENING');
  });
}

startServer();
