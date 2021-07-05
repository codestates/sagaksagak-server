const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');
const Router = require('./routes/index');
const roomModules = require('./controllers/room/roomModules')
const app = express();
const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: process.env.CLIENT_ORIGIN,
      methods: ["GET", "POST"]
    }
  })

const PORT = process.env.PORT;

app.use(cors({
    origin: process.env.CLIENT_ORIGIN,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"]
}))
app.use(express.json())
app.use(urlencoded({ extended: false }))
app.use('/', Router)
app.use(cookieParser());
io.on('connection', roomModules.io)

app.get('/', (req, res) => {
    res.send('hello world!');
})

server.listen(PORT);


module.exports = server;
