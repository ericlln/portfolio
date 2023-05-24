import React from 'react';
import Socials from './Socials';

const Heading = () => {
	return (
		<div className="px-12 pt-12 antialiased">
			<div className="flex-col">
				<h1 className="text-black text-7xl font-title">Eric Lin</h1>
				<h2 className="text-highlight text-lg font-semibold font-sans mb-4">Systems Design Engineering @ UW</h2>
				<div className="mb-8">
					<Socials />
				</div>
				<p className='w-max-w md:w-1/2'>Hi, I am currently a first year student at University of Waterloo!
				</p>
			</div>
		</div>
	);
};

export default Heading;
