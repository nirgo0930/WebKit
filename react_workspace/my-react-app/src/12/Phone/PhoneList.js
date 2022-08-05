import React from 'react';

function PhoneList(props) {
    return (
        <div>
            <ul>
                {props.phoneList.map((item, i) => {
                    return <>
                        <li key={item.id}>
                            {i + 1}.{item.name} / {item.phone} / {item.email} / <br />
                            <input type="button" value="삭제" onClick={(e) => { props.onDelete(item.id) }} />
                        </li>

                    </>
                })}
            </ul>

        </div>);
}

export default PhoneList;