import React from "react";
import Trending from "../Pages/Trending/Trending";
import "./Home.css";
function Home() {
	return (
		<div className="home page">
			<div className="container">
				<Trending />
			</div>
		</div>
	);
}

export default Home;
