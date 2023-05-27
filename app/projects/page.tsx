import prisma from '@/lib/prisma';

import Navbar from '@/src/Navbar/Navbar';
import Card from '@/src/Projects/Card';

async function getData() {
	const res = await prisma.projects.findMany({
		select: { id: true, title: true, description: true, technologies: true, thumbnail: true, link: true },
		orderBy: { order: 'asc' },
	});
	return res;
}

export default async function Projects() {
	const projects = await getData();

	return (
		<div>
			<Navbar />
			<div className="flex flex-col w-2/3 gap-x-14 gap-y-8 justify-items-center items-center mx-auto my-12">
				{projects &&
					projects.map((project) => (
						<Card
							key={project.id}
							id={project.id}
							title={project.title}
							description={project.description}
							technologies={project.technologies}
							thumbnail={project.thumbnail}
							link={project.link}
						/>
					))}
			</div>
		</div>
	);
}
