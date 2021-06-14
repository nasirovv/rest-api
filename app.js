const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');


// Body Parser Middleware
app.use(bodyParser.json());

// Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

// Routes
app.get('/', (req, res) => {
    res.send('We are on home');
})

// Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to DB');
})

app.listen(3000);