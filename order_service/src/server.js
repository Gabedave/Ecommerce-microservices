const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');

const order = require('./api/order')

const connectDB = require('./config/db');

const PORT = process.env.PORT || 5100;

// Load environment variables via config.env if in development
dotenv.config();

// Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet())

// app.use(cors());
// app.options('*', cors());

app.use('/api/v1/orders', order);

const server = app.listen(PORT, () => {
  console.log(`-------- Starting Order Service ----------`)
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.error(err)
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close(() => process.exit(10));
});

module.exports = app;

