import React, { useState } from 'react';

function PhoneInput(props) {
    const [name, setName] = useState("추가사람");
    const [phone, setPhone] = useState("010-1111-2222");
    const [email, setEmail] = useState("test@example.com");

    return (<div>
        <fieldset>
            <label>이름 :</label>
            <input value={name} onChange={(e) => { setName(e.currentTarget.value) }} />
            <label>전화번호 :</label>
            <input value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} />
            <label>이메일 :</label>
            <input value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} />
            <button onClick={(e) => { props.onSave(name,phone,email) }}>등록</button>
        </fieldset>
    </div>)
}

export default PhoneInput;