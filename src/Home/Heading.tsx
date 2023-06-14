import Link from 'next/link';
import React from 'react';
import Socials from './Socials';

const Heading = () => {
	return (
		<div className="px-12 pt-12 antialiased">
			<div className="flex flex-col">
				<h1 className="text-gray-600 text-7xl font-title text-center sm:text-left">Eric Lin</h1>
				<h2 className="text-highlight text-lg font-semibold font-sans mb-4 text-center sm:text-left">
					Systems Design Engineering @ UW
				</h2>
				<div className="mb-8 flex justify-center sm:justify-start">
					<Socials />
				</div>
				<p className="w-max-w md:w-5/12 leading-8 text-center sm:text-left">
					Hi, I am currently a first year student at University of Waterloo! I am interested in all
					aspects of software development, especially after my recent internship where I worked in
					full-stack development. You can read more about my experiences in my{' '}
					<Link href="/projects" className="underline text-green-800">
						projects
					</Link>. {' '}
					In my spare time I enjoy exercising, playing video games, and taking photos &mdash; some
					of which can be found in my{' '}
					{
						<Link href="/gallery" className="underline text-green-800">
							gallery
						</Link>
					}
					.
				</p>
			</div>
		</div>
	);
};

export default Heading;
