import { useState } from 'react';
import MovieInput from './MovieInput';
import MovieList from './MovieList';

function Movie() {
    const [movieList, setMovieList] = useState([
        { title: '첫 번째', date: '2020-03-10', raiting: 5 },
        { title: '두 번째', date: '2021-06-15', raiting: 5 },
        { title: '세 번째', date: '2022-09-20', raiting: 5 }
    ]);

    const [searchList, setSearchList] = useState(movieList);

    function saveMovie(movieTitle, openDate) {
        let newList = [...movieList, { title: movieTitle, date: openDate, raiting: 5 }];
        setMovieList(newList);
        setSearchList(newList);
    }

    function deleteMovie(movieTitle) {
        let newList = movieList.filter(movie => movie.title !== movieTitle);
        setMovieList(newList);
        setSearchList(newList);
    }

    function setRaiting(title, rate) {
        movieList.filter(movie => movie.title === title)[0].raiting = Number(rate);
    };

    function searchMovie(movieTitle) {
        setSearchList(movieList.filter((movie) => {
            return movie.title.toLowerCase().match(movieTitle) != null;
        }));
    }

    return (
        <>
            <h2>Movie List</h2>
            {/* <InputMovie movieList={movieList} setMovieList={setMovieList} setSearchList={setSearchList} /> */}
            <MovieInput onSaveMovie={saveMovie} />
            <hr />
            {/* <MovieList movieList={movieList} searchList={searchList} setMovieList={setMovieList} setSearchList={setSearchList} /> */}
            <MovieList searchList={searchList} setRaiting={setRaiting} onSearchMovie={searchMovie} onDeleteMovie={deleteMovie} />
        </>);
}

export default Movie;