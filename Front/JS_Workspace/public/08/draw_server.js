const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const socketIO = require('socket.io');

const Port = 3000;
app.set('port', Port);

//middleware 추가
app.use(cors());
app.use(express.static(__dirname));


const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${Port}`);
});

var io = socketIO.listen(server);
// 클라이언트 접속이 되면 실행.
io.sockets.on('connection', function (socket) {
    // socket 매개 변수 - 클라이언트 소켓.
    console.log(">>>>> 클라이언트 소켓 접속!!!");

    // socket.emit('news', 'hello');
    socket.on('client-message', function (data) {
        console.log("client message : " + data);
        io.sockets.emit('news', data);
    });

    socket.on('message', function (data) {
        console.log("client message : ", data);
        switch (data['status']) {
            case 'start':
                io.sockets.emit('start', data); break;
            case 'draw':
                io.sockets.emit('draw', data); break;
            case 'end':
                io.sockets.emit('end'); break;
            case 'reset':
                io.sockets.emit('reset'); break;
        }
    });


});