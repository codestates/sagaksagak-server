const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const Router = require('./routes/index');
const server = http.createServer(app);

const app = express();
const PORT = 5000;

app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use('/', Router)
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
}))
app.use(cookieParser());

// app.use('/users', usersRouter);

app.get('/', (req, res) => {
    res.send('hello world!');
})

server.listen(PORT);

module.exports = server;
