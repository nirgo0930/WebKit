// function MovieList({ movieList, searchList, setMovieList, setSearchList }) {
//     return (<>
//         <div>
//             <label>검색 :</label>
//             <input type="text" onChange={(e) => {
//                 let keyword = e.currentTarget.value;

//                 setSearchList(movieList.filter((item) => {
//                     let text = item.title.toLowerCase();
//                     return text.match(keyword) != null;
//                 }));
//             }} />
//         </div>
//         <div>
//             <table style={{ textAlign: 'center', width: "500px", height: "max-content", border: "1px solid black" }}>
//                 <thead>
//                     <tr>
//                         <th>순서</th>
//                         <th>영화 제목</th>
//                         <th>개봉 날짜</th>
//                         <th>별점</th>
//                         <th>삭제</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {searchList.map((item, i) => {
//                         return (<>
//                             <tr key={item.title}>
//                                 <td> {i + 1} </td>
//                                 <td> {item.title} </td>
//                                 <td> {item.date} </td>
//                                 <td>
//                                     <select className="rate" key={item.raiting} defaultValue={item.raiting} onChange={(e) => {
//                                         {
//                                             item.raiting = Number(e.target.value);
//                                             let movieItem = movieList.filter(movie => movie.title === item.title)[0];
//                                             movieItem.raiting = Number(e.target.value);
//                                         };
//                                     }}>
//                                         <option value="1">1</option>
//                                         <option value="2">2</option>
//                                         <option value="3">3</option>
//                                         <option value="4">4</option>
//                                         <option value="5">5</option>
//                                     </select>
//                                 </td>
//                                 <td>
//                                     <input type="button" value="삭제" onClick={(e) => {
//                                         setMovieList(movieList.filter(movie => movie.title !== item.title));
//                                         setSearchList(movieList.filter(movie => movie.title !== item.title));
//                                     }} />
//                                 </td>
//                             </tr>
//                         </>)
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     </>);
// }

function MovieList({ searchList, setRaiting, onSearchMovie, onDeleteMovie }) {
    return (<>
        <div>
            <label>검색 :</label>
            <input type="text" onChange={(e) => { onSearchMovie(e.currentTarget.value) }} />
        </div>
        <div>
            <table style={{ textAlign: 'center', width: "500px", height: "max-content", border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>순서</th>
                        <th>영화 제목</th>
                        <th>개봉 날짜</th>
                        <th>별점</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {searchList.map((item, i) => {
                        return (<>
                            <tr key={item.title}>
                                <td> {i + 1} </td>
                                <td> {item.title} </td>
                                <td> {item.date} </td>
                                <td>
                                    <select className="rate" key={item.raiting} defaultValue={item.raiting} onChange={(e) => {
                                        setRaiting(item.title, e.target.value);
                                    }}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="button" value="삭제" onClick={(e) => { onDeleteMovie(item.title) }} />
                                </td>
                            </tr>
                        </>)
                    })}
                </tbody>
            </table>
        </div>
    </>);
}

export default MovieList;