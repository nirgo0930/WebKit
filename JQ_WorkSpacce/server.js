const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res)=> {
    res.end("<h1>Hello Nodejs world</h1>");
});

const server = http.createServer(app);
server.listen(3000, ()=>{
    console.log("run on Server : http://localhost:3000");
});

console.log(socketio);
var io = socketio.listen(server);

io.sockets.on('connection', function(socket) {
    console.log(">>>>> 클라인트 소켓 접속!!!");
});