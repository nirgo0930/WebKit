const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

const Port = 3000;

app.get('/', (req, res, next) => {
    res.end("<h1>Welcome</h1>");
});

app.get('/test', (req, res, next) => {
    res.end("<h1>Welcome Test</h1>");
});

const server = http.createServer(app);
server.listen(Port, function () {
    console.log(`Server running at http://localhost:${Port}`);
});