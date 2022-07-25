const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });
// Connect to MongoDB
connectDB();

const app = express();

// Initialise Middleware
// Allow us to get body from req.body
app.use(express.json({ extended: false }));

// Define our routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Test end-point
app.get('/', (req, res) => res.send('API Runnning'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
