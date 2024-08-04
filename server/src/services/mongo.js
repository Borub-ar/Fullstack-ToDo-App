const mongoose = require('mongoose');

const MONGO_URL =
  'mongodb+srv://Kacper:xs9zz3otwBohwEj7@cluster0.oehttvl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connection.on('connected', () => {
  console.log('MongoDB connected');
});

mongoose.connection.on('error', error => {
  console.error('MongoDB connection error:', error);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

module.exports = {
  mongoConnect,
};
