const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');

// 새로운 속성 추가
app.set('port', 3000);
app.set('views', __dirname + '/views'); // 폴더 경로
app.set('view engine', 'ejs'); // 확장자

// 미들웨어 추가
app.use(cors());
app.use(express.static(__dirname + '/public'))

let top = 1;
let carList = [
    {cno:top++, name:'SONATA', price:3500, company:'HYUNDAI', year:2020},
    {cno:top++, name:'GRANDUER', price:5500, company:'HYUNDAI', year:2020},
    {cno:top++, name:'BMW', price:5500, company:'BMW', year:2021},
    {cno:top++, name:'S80', price:6500, company:'VOLVO', year:2022}
];

// 라우트(route) 설정
app.get("/home", (req, res)=>{
    req.app.render('home', {carList}, (err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});

// ejs 페이지로 forward
app.get("/input", (req, res)=>{
    req.app.render('input', {carList}, (err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});
// input 데이터 처리
app.get("/input_ok", (req, res)=>{
    let carData = {
        cno : top++, 
        name : req.query.name, 
        price : req.query.price, 
        company : req.query.company, 
        year : req.query.year
    };
    carList.push(carData);
    console.log(carList);
    res.redirect("/home");
});

app.get("/detail", (req, res)=>{
    req.app.render('detail', {carList}, (err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});

app.get("/modify", (req, res)=>{
    req.app.render('modify', {carList}, (err, htmlData)=>{
        if(err) throw err;
        res.end(htmlData);
    });
});

const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('서버 실행 중 : http://localhost:3000');
});
