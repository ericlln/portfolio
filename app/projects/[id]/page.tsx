import prisma from '@/lib/prisma';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import Navbar from '@/src/Navbar/Navbar';
import Link from 'next/link';

async function getProjects() {
	const res = await prisma.projects.findMany({
		select: { id: true },
	});
	return res;
}

async function getData(id: string) {
	const res = await prisma.projects.findUnique({
		where: { id: parseInt(id) },
		select: { title: true, hasBlog: true, markdown: true },
	});
	return res;
}

export default async function Project({ params }: { params: { id: string } }) {
	const projects = await getProjects();

	const blog = projects.some((e) => e.id === parseInt(params.id)) ? await getData(params.id) : null;

	return (
		<div>
			<Navbar />
			{blog ? (
				<div className="flex h-screen">
					<div className=" m-auto mt-12">
						<h1 className="text-highlight text-2xl font-semibold mb-4">{blog!.title}</h1>
						<div className="prose lg:prose-md mb-12">
							<ReactMarkdown remarkPlugins={[remarkGfm]}>{blog!.markdown!}</ReactMarkdown>
						</div>
					</div>
				</div>
			) : (
				<div className="flex h-screen">
					<div className="m-auto text-center">
						<h1 className=" text-gray-500 text-2xl font-semibold mb-2">Invalid URL</h1>
						<Link href="/" className="text-highlight underline">
							Go home
						</Link>
					</div>
				</div>
			)}
		</div>
	);
}
