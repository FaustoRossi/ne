import React from 'react'
import { Triangle } from "react-loader-spinner";

const Spinner = () => {
  return (
		<div className='h-screen flex items-center justify-center'> 
			<Triangle
				height="100"
				width="100"
				color="red"
				ariaLabel="loading"
				className=""
			/>
		</div>
	);
}

export default Spinner