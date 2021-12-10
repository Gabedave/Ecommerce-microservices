const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');

const payment = require('./api/payment')

const connectDB = require('./config/db');
// const connectMQ = require('./config/mq');

const PORT = process.env.PORT || 5200;

// Load environment variables via config.env if in development
dotenv.config();

// Connect to database
connectDB();
// const channel = connectMQ();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())

// app.use(cors());
// app.options('*', cors());

app.use('/api/v1/payment', payment);

const server = app.listen(PORT, () => {
  console.log(`-------- Starting Payment Service ----------`)
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(err)
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(10));
});


