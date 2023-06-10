import prisma from '@/lib/prisma';

import Navbar from '@/src/Navbar/Navbar';
import Gallery from '@/src/Gallery/Gallery';

export const revalidate = 0;

async function getData() {
	const res = await prisma.gallery.findMany();
	return res;
}

export default async function Photos() {
	const images = await getData();

	return (
		<>
			<Navbar />
			<div className='w-3/4 mx-auto my-10'>
				<Gallery images={images} />
			</div>
		</>
	);
}
