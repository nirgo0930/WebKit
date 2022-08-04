import React, { useState } from 'react';

function InputMovie({ movieList, setMovieList, setSearchList }) {
    const [title, setTitle] = useState("새로운 영화");
    const [date, setDate] = useState("0000.00.00");

    return (<div>
        <table>
            <tbody>
                <tr>
                    <td>제목</td>
                    <td>
                        <input value={title} onChange={(e) => {
                            setTitle(e.currentTarget.value)
                        }} />
                    </td>
                </tr>
                <tr>
                    <td>개봉일</td>
                    <td>
                        <input type="text" value={date} onChange={e => {
                            setDate(e.currentTarget.value);
                        }} />
                    </td>
                    <td>
                        <button onClick={(e) => {
                            setMovieList([...movieList, { title, date, raiting: 5 }]);
                            setSearchList([...movieList, { title, date, raiting: 5 }]);
                        }}>저장</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <br />
    </div>)
}

export default InputMovie;

