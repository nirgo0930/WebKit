const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const router = express.Router();
const path = require('path'); // OS마다 다른 구분자를 
const bodyParser = require('body-parser');

const dataList = [
    {"no":1, "name":"HONG", "phone":"010-1111-1111", "subject":"JAVA", "studyday":"2022-11-15"},
    {"no":2, "name":"PARK", "phone":"010-2222-2222", "subject":"ORACLE", "studyday":"2022-11-20"},
    {"no":3, "name":"LEE", "phone":"010-3333-3333", "subject":"SPRING", "studyday":"2022-11-25"}
];
let no = 4;

Array.prototype.myFindIndex = function(key, value) {
    for(var i=0; i<this.length; i++) {
        if(this[i][key] == value) {
            return i;
        }
    }
    return -1;
}

app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/html', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

router.route('/').get((req, res)=>{
    res.redirect('/html');
});

router.route('/register/input').post((req, res)=>{
    let data = {
        "no" : no++,
        "name" : req.body.name,
        "phone" : req.body.phone,
        "subject" : req.body.subject,
        "studyday" : req.body.studyday
    }

    dataList.push(data);
    console.log(">>>>> 등록 성공!!");
    res.redirect('/register/list');
});

router.route('/register/list').get((req, res)=>{
    // 뷰엔진 ejs 사용
    req.app.render('register_list', {"list":dataList}, (err, html)=>{
        if(err) {
            res.end('<h2>EJS Rendering Error!</h2>');
            return;
        }
        res.end(html);
    });
});

router.route('/register/detail/:no').get((req, res)=>{
    let no = parseInt(req.params.no);
    let idx = dataList.myFindIndex("no", no);
    //res.end(`<p>${JSON.stringify(dataList[idx])}</p>`);
    //res.end() 문자열 전달, res.send() 객체 전달
    //res.send(dataList[idx]);
    req.app.render('register_detail', {"data":dataList[idx]}, (err, html)=>{
        if(err) {
            res.end('<h2>EJS Rendering Error!</h2>');
            return;
        }
        res.end(html);
    });
});

router.route('/register/modify/:no').get((req, res)=>{
    let no = parseInt(req.params.no);
    let idx = dataList.myFindIndex("no", no);
    req.app.render('register_modify', {"data":dataList[idx]}, (err, html)=>{
        if(err) {
            res.end('<h2>EJS Rendering Error!</h2>');
            return;
        }
        res.end(html);
    });
});

router.route('/register/modify').post((req, res)=>{
    let no = parseInt(req.body.no);
    let data = {
        "no" : no,
        "name" : req.body.name,
        "phone" : req.body.phone,
        "subject" : req.body.subject,
        "studyday" : req.body.studyday
    }
    let idx = dataList.myFindIndex("no", no);
    if(idx != -1) {
        dataList[idx] = data;
    }
    // 수정 완료 후 목록으로 이동
    res.redirect('/register/list');
});

router.route('/register/delete/:no').get((req, res)=>{
    let no = parseInt(req.params.no);
    let idx = dataList.myFindIndex("no", no);
    console.log(idx);
    dataList.splice(idx, 1);
    res.redirect('/register/list');
});

app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), ()=>{
    console.log('http://localhost:%d', app.get('port'));
});