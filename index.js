const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Connect to DB
mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log('connected to db');
  }
);

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/user');
const collectionRoutes = require('./routes/collection');
// const commentRoutes = require('./routes/comment');

// Route Middlewares
app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);
// app.use('/api/comment/:_id', commentRoutes);

app.listen(5000, () => console.log('server on'));
