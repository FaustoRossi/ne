import React from "react";

import Image from "next/image";

const MovieItem = ({ movie }) => {
	return (
		<div className="w-[160px] h-[200px] flex justify-center items-center  mt-4  cursor-pointer relative  p-2">
			<Image
				src={movie?.image}
				alt={movie?.title}
				priority={true}
				layout="fill"
				className="object-cover "
			/>
			<div className=" absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
				<p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
					{movie?.title} {movie?.description}
				</p>
			</div>
		</div>
	);
};

export default MovieItem;
