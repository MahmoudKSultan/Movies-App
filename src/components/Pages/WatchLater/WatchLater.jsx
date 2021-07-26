import React from "react";
import { Consumer } from "../../../context";
import Movies from "../../common/MoviesBox";

function WatchLater() {
	return (
		<div className="watchlater page">
			<div className="container">
				<Consumer>
					{(value) => {
						return <Movies movies={value.watchLater} btn="removeBtn" />;
					}}
				</Consumer>
			</div>
		</div>
	);
}

export default WatchLater;
