const server = require('../../index');
const socket = require('socket.io');
const io = socket(server, {
    cors: {
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST", "OPTIONS"],
    }
})

const users = {};//rooms

const socketToRoom = {};

io.on('connection', socket => {
    socket.on("join room", roomID => {
        
    });
    
})