import React, { useState } from "react";
import Image from "next/image";
import SearchBar from "./SearchBar";


const Navbar = ({ onTitleSubmit }) => {
	return (
		<nav>
			<div className=" mx-auto px-4">
				<div className="md:flex justify-between">
					<div className="md:flex ">
						{/* <!-- logo --> */}
						<div className="p-4 text-center  md:hidden lg:flex cursor-pointer">
							<Image src="/logo.png" width={128} height={30} alt="logo" />
						</div>

						{/* <!-- primary nav --> */}
						<div className="flex items-center justify-center">
							<ul className=" grid grid-cols-3 gap-2 sm:flex items-center ">
								<li>
									<a
										href="#"
										className="py-5 px-2 text-sm text-slate-200 hover:text-gray-400"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-5 px-2 text-sm text-slate-200 hover:text-gray-400"
									>
										Tv Shows
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-5 px-2 text-sm text-slate-200 hover:text-gray-400"
									>
										Movies
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-5 px-2 text-sm text-slate-200 hover:text-gray-400"
									>
										New &amp; Popular
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-5 px-2 text-sm text-slate-200 hover:text-gray-400"
									>
										My List
									</a>
								</li>
								<li>
									<a
										href="#"
										className="py-5 px-2 text-sm text-slate-200 hover:text-gray-400"
									>
										Watch Again
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* <!-- secondary nav --> */}
					<SearchBar onTitleSubmit ={onTitleSubmit}/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
