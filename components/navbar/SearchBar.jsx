import React, { useState } from "react";

import { BiBell } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

import Image from "next/image";

const SearchBar = ({onTitleSubmit}) => {
	const [term, setTerm] = useState("");

	const onSubmit = (event) => {
		event.preventDefault();

		console.log(term);

		onTitleSubmit(term);
	};

	return (
		<div className="my-4 flex items-center justify-center ">
			<form onSubmit={onSubmit}>
				<div className=" relative flex items-center">
					<GoSearch className="absolute mx-2 text-slate-50 cursor-pointer " />
					<input
						type="search"
						name="search"
						value={term}
						//necesita el onChange porque si no seria un valor de solo lectura
						onChange={(e) => setTerm(e.target.value)}
						className="  pl-7 bg-zinc-900 border text-slate-50 border-slate-200"
					/>
					<BiBell className="text-slate-50 mx-2 cursor-pointer " />
					<Image
						src="/miyagi.png"
						width={40}
						height={35}
						alt="miyagi"
						className="rounded cursor-pointer "
					/>
					<MdArrowDropDown
						size={30}
						className="text-slate-50 mx-2 cursor-pointer "
					/>
				</div>
			</form>
		</div>
	);
};

export default SearchBar;
