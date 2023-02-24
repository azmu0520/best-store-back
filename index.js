const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const cors = require('cors');

// enable cors
app.use(cors({ origin: '*' }));

// env config
dotenv.config();

// Connect to DB
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_URL, () => {
  console.log('connected to db');
});

// Middleware
app.use(express.json());

// Import Routes
const userRoutes = require('./routes/user');
const collectionRoutes = require('./routes/collection');
const authRoutes = require('./routes/auth');
const itemsRoutes = require('./routes/item');
const topicRoutes = require('./routes/topic');
const tagsRoutes = require('./routes/tags');

// Route Middlewares
app.use('/api/users', userRoutes);
app.use('/api/collections', collectionRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/tags', tagsRoutes);

app.listen(5000, () => console.log('server on'));
