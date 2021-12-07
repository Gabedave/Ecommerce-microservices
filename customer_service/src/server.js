const express = require('express');
// const cors = require('cors');
const dotenv = require('dotenv');
const helmet = require('helmet');

const customer = require('./api/customer')

const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

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

app.use('/api/v1/customers', customer);

const server = app.listen(PORT, () => {
  console.log(`-------- Starting Customer Service ----------`)
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

// Handle Uncaught Exceptions
process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception', err)
})

// Handle unhandled promise rejections
process.on('uncaughtRejection', (err, promise) => {
  console.error('Unhandled Rejection', err)
})

