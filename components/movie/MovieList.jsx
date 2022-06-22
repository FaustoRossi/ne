import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
	const renderedList = movies?.map((movie) => {
		return <MovieItem key={movie.id} movie={movie} />;
	});

	return (
		<div className="w-screen h-screen bg-zinc-900 ">
			<div className="grid grid-cols-2 sm:grid-cols-4  lg:grid-cols-6 gap-2 px-4  ">
				{renderedList}
			</div>
		</div>
	);
};

export default MovieList;
