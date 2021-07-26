import React, { useState, useEffect } from "react";
import FullMoviesFunc from "../../common/FullMoviesFunc/FullMoviesFunc";
import Loading from "../../common/Loading/Loading";
import MoviesBox from "../../common/MoviesBox";
import Pagination from "../../common/Pagination";

function Trending() {
	const [trendingMovies, setTrendingMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [loaded, setLoaded] = useState(true);
	useEffect(() => {
		setLoaded(true);
		fetch(
			`https://api.themoviedb.org/3/trending/all/day?api_key=9c064844044adcff517d366a3fda2a68&page=${page}`
		)
			.then((res) => res.json())
			.then((data) => {
				setTrendingMovies(data.results);
				setLoaded(false);
			});
	}, [page]);
	console.log(page);
	return (
		<div className="trending">
			<FullMoviesFunc
				loaded={loaded}
				movies={trendingMovies}
				setPage={setPage}
			/>
		</div>
	);
}

export default Trending;
