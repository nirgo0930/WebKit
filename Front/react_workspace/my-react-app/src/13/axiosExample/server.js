const http = require('http');
const express = require('express');
const app = express();
const static = require('serve-static');
const router = express.Router();
const path = require('path'); // OS마다 다른 구분자를 
const bodyParser = require('body-parser');
const cors = require('cors');

const dataList = [
    { no: 1, name: "홍길동", tel: "010-1234-1111" },
    { no: 2, name: "김길동", tel: "010-1234-1112" },
    { no: 3, name: "홍길순", tel: "010-1234-1113" }
];
let no = 4;

Array.prototype.myFindIndex = function (key, value) {
    for (var i = 0; i < this.length; i++) {
        if (this[i][key] == value) {
            return i;
        }
    }
    return -1;
}

app.set('port', 8082);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use('/html', static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.route('/').get((req, res) => {
    res.redirect('/html');
});

router.route('/saram/input').post((req, res) => {
    let data = { no: no++, name: req.body.name, tel: req.body.tel }

    dataList.push(data);
    console.log(">>>>> 등록 성공!! : ");
    res.send(dataList);
});

router.route('/saram/list').get((req, res) => {
    res.send(dataList);
});


app.use('/', router);
const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log('http://localhost:%d', app.get('port'));
});