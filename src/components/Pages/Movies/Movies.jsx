import React, { useState, useEffect } from "react";
import FullMoviesFunc from "../../common/FullMoviesFunc/FullMoviesFunc";
import Genres from "../../common/Genres/Genres";
import MoviesBox from "../../common/MoviesBox";
import GetGenres from "./../../../genres";
import Pagination from "./../../common/Pagination";
function Movies() {
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState([]);
	const [loaded, setLoaded] = useState(true);
	const [selectedGenre, setSelectedGenre] = useState("");
	const allGenres = [...GetGenres()];
	useEffect(() => {
		setLoaded(true);
		fetch(
			`https://api.themoviedb.org/3/discover/movie?api_key=9c064844044adcff517d366a3fda2a68&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${
				selectedGenre.id || ""
			}&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
				setLoaded(false);
			});
	}, [selectedGenre, page]);
	console.log(selectedGenre);
	return (
		<div className="movies page">
			<div className="container">
				<Genres genres={allGenres} setSelectedGenre={setSelectedGenre} />
				<FullMoviesFunc loaded={loaded} movies={movies} setPage={setPage} />
			</div>
		</div>
	);
}

export default Movies;
