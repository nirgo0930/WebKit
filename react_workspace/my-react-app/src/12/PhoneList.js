import React, { useState } from 'react';

function PhoneList(props) {
    return (<>
        <ul>
            {props.phoneList.map((item, i) => {
                return <>
                    <li key={i}>
                        {i + 1}.{item.name} / {item.phone} / {item.email} / <br />
                        <input type="button" value="삭제" onClick={(e) => { props.onDelete(item.name) }} />
                    </li>

                </>
            })}
        </ul>

    </>);
}

export default PhoneList;