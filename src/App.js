import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Switch } from "react-router";
import Home from "./components/Home/Home";
import Movies from "./components/Pages/Movies/Movies";
import Search from "./components/Pages/Search/Search";
import WatchLater from "./components/Pages/WatchLater/WatchLater";
import Movie from "./components/Pages/Overview/Movie";
function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/movies" component={Movies} exact />
				<Route path="/search" component={Search} />
				<Route path="/watchlater" component={WatchLater} />
				<Route path="/movies/overview/:id" component={Movie} />
			</Switch>
		</div>
	);
}

export default App;
