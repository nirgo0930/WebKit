import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [saramList, setSaramList] = useState([
        { no: 1, name: "Sample", tel: "010-1111-1111" }
    ]);
    const [name, setName] = useState('김범준');
    const [tel, setTel] = useState('010-1234-5555');

    useEffect(() => {
        axios.get("http://localhost:8082/saram/list").then((response) => {
            setSaramList(response['data']);
        });
    }, []);

    return (
        <div>
            <h1>React.js axios Ajax로 만든 사람 관리 앱</h1>
            <fieldset>
                이름 <input type="text" name="name" value={name} onChange={e => setName(e.currentTarget.value)} /><br />
                연락처 <input type="text" name="name" value={tel} onChange={e => setTel(e.currentTarget.value)} /><br />
                <button onClick={(event) => {
                    let maxNo = -1;
                    saramList.forEach(function (itemObject) {
                        if (maxNo < itemObject.no) {
                            maxNo = itemObject.no;
                        }
                    });
                    let newSaram = { no: maxNo + 1, name, tel };
                    console.log(newSaram);
                    setSaramList([...saramList, newSaram]);
                    axios.post("http://localhost:8082/saram/input", newSaram).then((response) => {
                        setSaramList(response['data']);
                    });
                }}>저장</button>
            </fieldset>
            <table width="550" border="1">
                <tbody>
                    <tr>
                        <th>번호</th>
                        <th>성명</th>
                        <th>연락처</th>
                    </tr>
                    {saramList.map(function (saram, i) {
                        return (<tr key={saram.no}>
                            <td>{saram.no}</td>
                            <td>{saram.name}</td>
                            <td>{saram.tel}</td>
                        </tr>);
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default App;
