import React from "react";

function Movie({
	match: {
		params: { id },
	},
}) {
	return (
		<div className="movie page">
			<div className="container">
				<div className="row">{id}</div>
			</div>
		</div>
	);
}

export default Movie;
