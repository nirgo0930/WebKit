const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

let db = null;
let dbUrl = "mongodb://localhost";
let client = null;

MongoClient.connect(dbUrl, (err, _client) => {
  if (err) {
    console.log("error >>>", "몽고디비 접속 오류!");
    throw err;
  }
  client = _client;
  db = client.db("vehicle");
  console.log(">>>>", "몽고디비 접속 성공!");

  //let carData = { name: "SM6", price: 4000, company: "SAMSUNG", year: 2019 };
  // db접속 후에 실행
  // 전체 목록 검색
  //selectAll(db);
  // 입력 하기
  //insert(db, carData);
  // 검색 하기
  //selectOne(db, "61a823cadf8ab0fdfa8f34a7"); // K7이 검색 됨.
  // 수정 하기
  //update(db, carData, "61a85243a48f9cad6ab0e781");
  // 삭제 기능 구현
  //deleteDoc(db, "61a85243a48f9cad6ab0e781");
});

const deleteDoc = (db, objId) => {
  if (db) {
    // objId를 이용한 삭제 기능 구현
    var myquery = { _id: ObjectId(objId) };
    db.collection("car").deleteOne(myquery, function (err, result) {
      if (err) throw err;
      console.log("1 document deleted", result);
      client.close();
    });
  } else {
    console.log("db 접속 안됨!");
  }
};

const update = (db, carData, objId) => {
  if (db) {
    // objId와 같은 데이터를 갱신하도록 구현.
    var queryObj = { _id: new ObjectId(objId) };
    var newValue = { $set: carData };
    db.collection("car").updateOne(queryObj, newValue, function (err, res) {
      if (err) throw err;
      console.log("1 document updated", res.acknowledged);
      client.close();
    });
  } else {
    console.log("db 연결 안됨!");
  }
};

const insert = (db, carData) => {
  if (db) {
    var carRef = db.collection("car");
    carRef.insertOne(carData, function (err, result) {
      if (err) throw err;
      console.log("1 document inserted", result);
      // 결과 확인
      selectAll(db);
    });
  } else {
    console.log(">>>> db 접속 안됨!");
  }
};

const selectAll = (db) => {
  if (db) {
    var carRef = db.collection("car");
    carRef.find({}).toArray((err, arr) => {
      console.log(arr);

      // db와 연결 끊기
      client.close();
    });
  } else {
    console.log(">>>> db 접속 안됨!");
  }
};

const selectOne = (db, objId) => {
  if (db) {
    db.collection("car").findOne(
      { _id: ObjectId(objId) },
      (findErr, result) => {
        if (findErr) {
          throw findErr;
        }

        console.log(result.name, result);
        // db 접속 종료
        client.close();
      }
    );
  } else {
    console.log(">>>> db 접속 안됨!");
  }
};
