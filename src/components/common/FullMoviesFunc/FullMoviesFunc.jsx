import React from "react";
import Loading from "../Loading/Loading";
import Pagination from "./../Pagination";
import Movies from "./../MoviesBox";

function FullMoviesFunc({ loaded, movies, setPage }) {
	return (
		<div>
			{loaded ? (
				<Loading />
			) : (
				<div>
					<Movies movies={movies} />
					<Pagination setPage={setPage} />
				</div>
			)}
		</div>
	);
}

export default FullMoviesFunc;
