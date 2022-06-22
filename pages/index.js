import Head from "next/head";
import Image from "next/image";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Spinner from "../components/spinner/Spinner";

import movieApi from "./api/movieApi";
import { useState, useEffect } from "react";

import Navbar from "../components/navbar/Navbar";
import MovieList from "../components/movie/MovieList";

import styles from "../styles/Home.module.css";

export default function Home() {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		onTermSubmit('friends');
	}, []);

	const onTermSubmit = async (movie) => {
		const response = await movieApi.get(`/${movie}`);

		console.log(response.data.results);
		setMovies(response.data.results);
		setIsLoading(true);
	}; 
	return (
		<>
			
			<Head>
				<title>Netflix Clone | Abstract</title>
				<meta name="netflix-clone" content="abstract" />
			</Head>
			<div className="bg-zinc-900  w-full h-full  overflow-x-hidden">
				<Navbar onTitleSubmit={onTermSubmit} />
				{isLoading ? <MovieList movies={movies} /> : <Spinner />}
			</div>
		</>
	);
}
