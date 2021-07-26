import React from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../../context";
import "./SingleMovie.css";
function SingleMovie({ movie, btn }) {
	const url = "https://image.tmdb.org/t/p/w300";
	const notFound = "notfound.jpg";
	const getDate = (date = "") => {
		return date.slice(0, 4);
	};
	return (
		<div className="singleMovie">
			<div className="info">
				<Link to={`/movies/overview/${movie.id}`}>
					<img
						src={movie.poster_path ? `${url}/${movie.poster_path}` : notFound}
						alt="movie"
					/>
				</Link>
				<div className="row">
					<div className="title">
						<h4>{movie.title || movie.name}</h4>
						<h4>
							{getDate(movie.first_air_date || movie.release_date) || "date"}
						</h4>
					</div>
					<div className={btn ? "watchBtn danger" : "watchBtn"}>
						<Consumer>
							{(value) => {
								if (btn === "removeBtn") {
									return (
										<h4 onClick={() => value.removeFromWatchLater(movie.id)}>
											Remove
										</h4>
									);
								} else
									return (
										<h4
											onClick={() => {
												value.addToWatchLater(movie.id);
												console.log(movie.id);
											}}
										>
											Watch Later
										</h4>
									);
							}}
						</Consumer>
					</div>
				</div>
			</div>
			<div className={movie.vote_average > 5 ? "rate primary" : "rate danger"}>
				<h5>{movie.vote_average}</h5>
			</div>
		</div>
	);
}

export default SingleMovie;
