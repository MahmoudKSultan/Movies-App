import React from "react";

const context = React.createContext();
const Consumer = context.Consumer;

class Provider extends React.Component {
	state = {
		watchLater: JSON.parse(localStorage.getItem("watchLater")) || [],
		movies: [],
	};
	addToWatchLater = (id) => {
		let isExist = this.state.watchLater.find((movie) => movie.id === id);
		if (isExist) return;
		this.getMovie(id);
	};
	getMovie = (id) => {
		fetch(
			`https://api.themoviedb.org/3/movie/${id}?api_key=9c064844044adcff517d366a3fda2a68&language=en-US`
		)
			.then((res) => res.json())
			.then((movie) => {
				let watchLater = [...this.state.watchLater];
				watchLater.push(movie);
				this.setState({ watchLater });
				localStorage.setItem("watchLater", JSON.stringify(watchLater));
			});
	};
	removeFromWatchLater = (id) => {
		const watchLater = this.state.watchLater.filter((movie) => movie.id !== id);
		localStorage.setItem("watchLater", JSON.stringify(watchLater));
		this.setState({ watchLater });
	};

	render() {
		console.log(this.state.watchLater);
		return (
			<context.Provider
				value={{
					...this.state,
					addToWatchLater: this.addToWatchLater,
					removeFromWatchLater: this.removeFromWatchLater,
				}}
			>
				{this.props.children}
			</context.Provider>
		);
	}
}

export { Consumer, Provider };
