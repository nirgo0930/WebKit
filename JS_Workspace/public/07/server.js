const http = require('http');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// 새로운 속성 추가
app.set('port', 3000);
app.set('views', __dirname + '/views'); // 폴더 경로
app.set('view engine', 'ejs'); // 확장자

// 미들웨어 추가
app.use(cors());
app.use(express.static(__dirname));
console.log(__dirname);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let top = 1;
let carList = [
    { cno: top++, name: 'SONATA', price: 3500, company: 'HYUNDAI', year: 2020, score: 5 },
    { cno: top++, name: 'GRANDUER', price: 5500, company: 'HYUNDAI', year: 2020, score: 5 },
    { cno: top++, name: 'BMW', price: 5500, company: 'BMW', year: 2021, score: 5 },
    { cno: top++, name: 'S80', price: 6500, company: 'VOLVO', year: 2022, score: 5 }
];

// 라우트(route) 설정
app.get("/home", (req, res) => {
    req.app.render('home', { carList }, (err, htmlData) => {
        if (err) throw err;
        res.end(htmlData);
    });
});

app.get("/list", (req, res) => {
    res.send({ carList });
});

app.post("/insert", (req, res) => {
    let carData = {
        cno: top++,
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year,
        score: req.body.score
    };
    carList.push(carData);
    res.send({ carList });
});

app.post("/score", (req, res) => {
    let scoreData = {
        cno: req.body.cno,
        score: req.body.score,
    };

    let idx = carList.findIndex((item) => {
        console.log(item.cno, scoreData.cno);
        return item.cno == Number(scoreData.cno);
    });
    carList[idx].score = scoreData.score;
    res.send({ carList });
});


app.post("/edit", (req, res) => {
    let carData = {
        cno: req.body.cno,
        name: req.body.name,
        price: req.body.price,
        company: req.body.company,
        year: req.body.year
    };

    let idx = carList.findIndex((item) => {
        console.log(item.cno, req.body.cno);
        return item.cno == Number(req.body.cno);
    });
    console.log(carList[idx]);
    console.log(carData);

    carData.score = carList[idx].score;
    carList[idx] = carData;
    res.send({ carList });
});

app.post("/remove", (req, res) => {
    console.log(req.body);

    let idx = carList.findIndex((item) => {
        console.log(item.cno, req.body.cno);
        return item.cno == Number(req.body.cno);
    });
    console.log(idx);
    carList.splice(idx, 1);
    res.send({ carList });
});


const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('서버 실행 중 : http://localhost:3000');
});

