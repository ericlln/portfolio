'use client';

import { useEffect } from 'react';

import Navbar from '@/src/Navbar/Navbar';

export default function ProjectError({ error, reset }: { error: Error; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div>
			<Navbar />
			<div className="flex h-screen">
				<div className="m-auto text-center">
					<h1 className=" text-gray-500 text-2xl font-semibold mb-2">Something went wrong!</h1>
					<button className="text-highlight underline" onClick={() => reset()}>
						Try again
					</button>
				</div>
			</div>
		</div>
	);
}
