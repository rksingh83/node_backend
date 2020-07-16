const express = require('express');
const app = express();
const User = require('./route/user');
const Task = require('./route/task');
const errorHandler = require('./middleware/errorHandler')
const dot = require('dotenv');
dot.config({
    path: './config/.env'
});
const connectDB = require('./config/db');

connectDB();
const PORT = process.env.PORT;
app.use(express.json())
app.use('/api/v1/user', User);
app.use('/api/v1/task', Task);
app.use(errorHandler)
app.listen(PORT, () => console.log(`Listen on port no ${PORT}`))