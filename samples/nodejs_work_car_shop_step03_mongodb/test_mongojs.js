// npm install mongojs --save
// npm install mongodb --save
// npm install mongoose -S

// mongojs 모듈 테스트
var mongojs = require("mongojs");

// db 및 컬렉션 지정
var db = mongojs("vehicle", ["car"]);

// 컬렉션 검색하기
// 노드js에서는 콜백함수의 첫번째 인자가를 보통 err로 사용한다.
db.car.find(function (err, data) {
  console.log(data);

  // db 연결 끊기
  db.close();
});
