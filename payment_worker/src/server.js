
const worker = require('./services/worker')

const connectDB = require('./config/db');
const connectRabbitMQ = require('./config/mq')

// Connect to database and messaging queue
connectDB();
const channel = connectRabbitMQ();

worker(channel)

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(err)
  console.log(`Error: ${err.message}`.red);
});

