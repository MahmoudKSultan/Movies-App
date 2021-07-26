import React from "react";
import Loading from "./Loading/Loading";
import "./MoviesBox.css";
import SingleMovie from "./SingleMovie";
function Movies({ movies, btn }) {
	console.log("#".repeat(20));
	console.log(movies);
	console.log("#".repeat(20));
	return (
		<div className="box">
			<div className=" row">
				{movies &&
					movies.map((movie) => {
						return <SingleMovie movie={movie} key={movie.id} btn={btn} />;
					})}
			</div>
			{/* <Loading /> */}
		</div>
	);
}

export default Movies;
