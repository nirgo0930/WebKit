import React, { useState } from 'react';
import PhoneInput from './PhoneInput';
import PhoneList from './PhoneList';

function Phone() {
    const [dataList, setDataList] = useState([
        { name: "Lee", phone: "010-1234-1234", email: "Lee@naver.com" },
        { name: "Bang", phone: "010-5678-5678", email: "Bang@naver.com" },
        { name: "Han", phone: "010-1234-5678", email: "Han@naver.com" },
        { name: "Seo", phone: "010-5678-1234", email: "Seo@naver.com" },
    ])
    const [showList, setShowList] = useState(dataList)

    function saveFunc(name, phone, email) {
        let newList = [...dataList, { name: name, phone: phone, email: email }];
        setDataList(newList);
        setShowList(newList);
    }

    function deleteFunc(name){
        let newList = dataList.filter(data => data.name !== name);
        setDataList(newList);
        setShowList(newList);
    }

    return (<>
        <h1>전화번호부</h1>
        <PhoneInput onSave={saveFunc} />
        <hr />
        <PhoneList phoneList={dataList} onDelete = {deleteFunc} />
    </>);
}

export default Phone;