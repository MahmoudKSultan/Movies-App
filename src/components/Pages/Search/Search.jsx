import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import FullMoviesFunc from "../../common/FullMoviesFunc/FullMoviesFunc";
import MoviesBox from "../../common/MoviesBox";
import Pagination from "../../common/Pagination";

import "./Search.css";
function Search() {
	const [page, setPage] = useState(1);
	const [movies, setMovies] = useState([]);
	const [loaded, setLoaded] = useState(true);
	const [searchText, setSearchText] = useState("");
	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie/?query=${
				searchText || ""
			}&api_key=9c064844044adcff517d366a3fda2a68&language=en-US&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setMovies(data.results);
				setLoaded(false);
			})
			.catch((error) => console.error(error, error.stack));
	}, [searchText, page]);
	return (
		<div className="search page">
			<div className="container">
				<div className="row">
					<h2>Search for a Movie</h2>
				</div>
				<div className="form">
					<form>
						<input
							type="text"
							placeholder="Type a movie"
							onChange={(event) => setSearchText(event.target.value)}
						/>
					</form>
					<IoSearchOutline className="icon" size="1.2rem" />
				</div>

				{searchText ? (
					<FullMoviesFunc loaded={loaded} movies={movies} setPage={setPage} />
				) : null}
			</div>
		</div>
	);
}

export default Search;
