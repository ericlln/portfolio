import prisma from '@/lib/prisma';

import Navbar from '@/src/Navbar/Navbar';
import Card from '@/src/Projects/Card';

export const revalidate = 0;

async function getData() {
    const res = await prisma.projects.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            skills: true,
            thumbnail: true,
            link: true,
            hasBlog: true,
        },
        where: {
            visible: true,
        },
        orderBy: { order: 'asc' },
    });
    return res;
}

export default async function Projects() {
    const projects = await getData();

    return (
        <div>
            <Navbar />
            <div className="mx-auto my-12 flex w-2/3 flex-col items-center justify-items-center gap-x-14 gap-y-8">
                {projects &&
                    projects.map((project, i) => (
                        <Card
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            skills={project.skills}
                            thumbnail={project.thumbnail}
                            link={project.link}
                            hasBlog={project.hasBlog}
                            i={i}
                        />
                    ))}
            </div>
        </div>
    );
}
