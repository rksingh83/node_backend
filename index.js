const express = require('express');
const app = express();
const User = require('./route/user')
const dot = require('dotenv');
dot.config({
    path: './config/.env'
});
const connectDB = require('./config/db');
connectDB();
const PORT = process.env.PORT;
app.use(express.json())
app.use('/api/v1/user', User)
app.listen(PORT, () => console.log(`Listen on port no ${PORT}`))