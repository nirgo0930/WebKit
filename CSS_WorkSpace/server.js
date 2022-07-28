const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

const Port = 3000;
app.set('port', Port);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//middleware 추가
app.use(cors());
//pubcic 폴더 static 설정
app.use(express.static(__dirname + '/public'));


//route 설정
app.get('/test', (req, res) => {

});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`Server running at http://localhost:${Port}`);
});