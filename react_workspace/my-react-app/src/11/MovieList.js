import React, { useState } from 'react';
import InputMovie from './InputMovie';


function MovieList(props) {
    const [movieList, setMovieList] = useState([
        { title: '첫 번째', date: '2020.03.10', raiting: 5 },
        { title: '두 번째', date: '2021.06.15', raiting: 5 },
        { title: '세 번째', date: '2022.09.20', raiting: 5 }
    ]);

    const [searchList, setSearchList] = useState(movieList);

    const raitingItems = [1, 2, 3, 4, 5];

    return (<>
        <h2>Movie List</h2>
        <InputMovie movieList={movieList} setMovieList={setMovieList} setSearchList={setSearchList} />
        <hr />
        <div>
            <label>검색 : </label>
            <input type="text" onChange={(e) => {
                let keyword = e.currentTarget.value;

                setSearchList(movieList.filter((item) => {
                    let text = item.title.toLowerCase();
                    return text.match(keyword) != null;
                }));
            }} />
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
                            <tr>
                                <td> {i + 1} </td>
                                <td> {item.title} </td>
                                <td> {item.date} </td>
                                <td>
                                    <select className="rate" value={item.raiting} onChange={(e) => {
                                        {
                                            item.raiting = Number(e.target.value);
                                            let movieItem = movieList.filter(movie => movie.title === item.title)[0];
                                            movieItem.raiting = Number(e.target.value);
                                        };
                                    }}>
                                        <option key="1" value="1">1</option>
                                        <option key="2" value="2">2</option>
                                        <option key="3" value="3">3</option>
                                        <option key="4" value="4">4</option>
                                        <option key="5" value="5">5</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="button" value="삭제" onClick={(e) => {
                                        setMovieList(movieList.filter(movie => movie.title !== item.title));
                                        setSearchList(movieList.filter(movie => movie.title !== item.title));
                                    }} />
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