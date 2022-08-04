import React, { useState } from 'react';
import PhoneInput from './PhoneInput';
import PhoneList from './PhoneList';

function Phone() {
    const [dataList, setDataList] = useState([
        { id: 0, name: "Lee", phone: "010-1234-1234", email: "Lee@naver.com" },
        { id: 1, name: "Bang", phone: "010-5678-5678", email: "Bang@naver.com" },
        { id: 2, name: "Han", phone: "010-1234-5678", email: "Han@naver.com" },
        { id: 3, name: "Seo", phone: "010-5678-1234", email: "Seo@naver.com" },
    ])

    const [showList, setShowList] = useState(dataList)

    function saveFunc(name, phone, email) {
        let newList = [...dataList, { id: dataList[dataList.length - 1].id + 1, name: name, phone: phone, email: email }];
        setDataList(newList);
        setShowList(newList);
        console.log(dataList)
    }

    function deleteFunc(id) {
        let newList = dataList.filter(data => data.id !== id);
        setDataList(newList);
        setShowList(newList);
    }

    return (<>
        <h1>전화번호부</h1>
        <PhoneInput onSave={saveFunc} />
        <hr />
        <PhoneList phoneList={showList} onDelete={deleteFunc} />
    </>);
}

export default Phone;