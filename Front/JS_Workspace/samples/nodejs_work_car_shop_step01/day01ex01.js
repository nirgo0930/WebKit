const http = require('http');

const server = http.createServer();
server.listen(3000, function() {
    console.log("서버실행중 ... http://localhost:3000");
});

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write("<h2>Hello 길동이의 홈페이지!</h2>");
    res.end();
});