import React from "react";
import "./Navbar.css";
import { ImFire } from "react-icons/im";
import { MdWatchLater } from "react-icons/md";
import { BiMovie, BiSearch, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className="nav">
			<div className="container">
				<div className="row">
					<div className="title">
						<h2>Movie App</h2>
					</div>
					<BiMenu size="2rem" className="menu" />

					<div className="iconsBox row">
						<Link to="/" className="anc">
							<div className="iconBox">
								<ImFire size="1.5rem" />
								<span>Trending</span>
							</div>
						</Link>
						<Link to="/movies" className="anc">
							<div className="iconBox">
								<BiMovie size="1.5rem" />
								<span>Movies</span>
							</div>
						</Link>
						<Link to="/watchlater" className="anc">
							<div className="iconBox">
								<MdWatchLater size="1.5rem" />
								<span>Watch later</span>
							</div>
						</Link>
						<Link to="/search" className="anc">
							<div className="iconBox">
								<BiSearch size="1.5rem" />
								<span>Search</span>
							</div>
						</Link>
					</div>
					<div className="logo">
						<h2>PS Movies</h2>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
