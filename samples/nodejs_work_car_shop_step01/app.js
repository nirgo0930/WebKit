const http = require('http');
// npm install --save express
const express = require('express');
const app = express();
const router = express.Router();
// npm install --save serve-static
const static = require('serve-static');
// 무재칠시 (無財七施) - 돈 없이 남에게 베풀 수 있는 일곱가지...
// 정적 폴더 지정하기(static 모듈을 미들웨어로 등록한다)
app.use('/public', static(__dirname + "/public") );
// 동적페이지 연결 - 뷰엔진(view engine)
// ejs 뷰엔진 설치 및 설정 > npm i -S ejs

app.set('views', __dirname + '/views'); // 접두어
app.set('view engine', 'ejs');  // 접미어

router.route('/').get(function(req, res){
    req.app.render('home', {name:'범준쌤'}, function(err, html) {
        res.end(html);
    });
});

let carList = [
    {_id:101, name:"Sonata", price:2500, company:"HYUNDAI", year:2019},
    {_id:102, name:"K7", price:2500, company:"KIA", year:2017},
    {_id:103, name:"SM6", price:2500, company:"SAMSUNG", year:2020}
];

router.route('/car/list').get(function(req, res){
    req.app.render('car_list', {cars:carList}, function(err, html) {
        res.end(html);
    });
});

router.route('/img').get(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>길동이의 홈페이지</h1>');
    res.write('<p><img src="/public/img01.jpg"></p>');
    res.end();
});

router.route('/profile').get(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
    res.write('<h1>길동이의 프로필 페이지</h1>');
    res.write("<h3>○ 직업 : 프로그래머</h3>");
    res.write("<h3>○ 경력 : 20년</h3>");
    res.end();
});

// router 미들웨어 설정(서버 실행 전에 설정한다)
app.use('/', router);
// express와 http를 결합 한 형태로 서버 실행
const server = http.createServer(app);
server.listen(3000, function() {
    console.log("서버실행중 ... http://localhost:3000");
});