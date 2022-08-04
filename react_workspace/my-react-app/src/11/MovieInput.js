import { useState } from 'react';

// function MovieInput({ movieList, setMovieList, setSearchList }) {
//     const [title, setTitle] = useState("새로운 영화");
//     const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

//     return (<div>
//         <table>
//             <tbody>
//                 <tr>
//                     <th>제목</th>
//                     <td>
//                         <input value={title} onChange={(e) => {
//                             setTitle(e.currentTarget.value)
//                         }} />
//                     </td>
//                 </tr>
//                 <tr>
//                     <th>개봉일</th>
//                     <td>
//                         <input type="date" value={date} onChange={e => {
//                             setDate(e.currentTarget.value);
//                         }} />
//                     </td>
//                     <td>
//                         <button onClick={(e) => {
//                             setMovieList([...movieList, { title, date, raiting: 5 }]);
//                             setSearchList([...movieList, { title, date, raiting: 5 }]);
//                         }}>저장</button>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
//     </div>)
// }

function MovieInput({ onSaveMovie }) {
    const [title, setTitle] = useState("새로운 영화");
    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

    return (<div>
        <table>
            <tbody>
                <tr>
                    <th>제목</th>
                    <td>
                        <input value={title} onChange={(e) => { setTitle(e.currentTarget.value) }} />
                    </td>
                </tr>
                <tr>
                    <th>개봉일</th>
                    <td>
                        <input type="date" value={date} onChange={e => { setDate(e.currentTarget.value) }} />
                    </td>
                    <td>
                        <button onClick={(e) => { onSaveMovie(title, date) }}>저장</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>)
}

export default MovieInput;