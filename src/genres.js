import { useEffect, useState } from "react";
let GetGenres = () => {
	const [genres, setGenres] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/genre/movie/list?api_key=9c064844044adcff517d366a3fda2a68&language=en-US"
		)
			.then((res) => res.json())
			.then((data) => setGenres(data.genres));
	}, []);
	return genres;
};

export default GetGenres;
