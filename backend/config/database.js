const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/checklist-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // Example: Increase timeout to 5 seconds
  socketTimeoutMS: 45000, // Example: Increase socket timeout to 45 seconds
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.log(`Error connecting to MongoDB: ${err}`);
});
