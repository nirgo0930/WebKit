const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/form', function(req, res) {
    console.log(">>> Method: GET, URL: /form");
    
    let title = req.query.title;
    let name = req.query.name;
    let contents = req.query.contents;
    
    let resData = {
        title,
        name,
        contents
    };

    res.send(resData);
});

const server = http.createServer(app);
server.listen(3000, function () {
    console.log("server operating >>> http://localhost:3000");
});