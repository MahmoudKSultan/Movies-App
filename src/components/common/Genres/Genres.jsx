import React from "react";
import "./Genres.css";
function Genres({ genres, setSelectedGenre }) {
	return (
		<div className="genres">
			<div className="row">
				{genres.map((genre) => {
					return (
						<h5
							className="genre"
							key={genre.id}
							onClick={() => setSelectedGenre(genre)}
						>
							{genre.name}
						</h5>
					);
				})}
			</div>
		</div>
	);
}

export default Genres;
