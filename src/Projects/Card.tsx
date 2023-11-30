import Image from 'next/image';
import Link from 'next/link';

import Skills from './Skills';

interface CardProps {
    id: number;
    title: string | null;
    description: string | null;
    skills?: string | null;
    thumbnail?: string | null;
    link?: string | null;
    hasBlog?: boolean | null;
    i: number;
}

export default function Card({
    id,
    title,
    description,
    skills,
    thumbnail,
    link,
    hasBlog,
    i,
}: CardProps) {
    return (
        <div className="flex flex-col rounded-lg bg-gray-100 p-8 ring-2 ring-inset ring-gray-300 xl:flex-row xl:space-x-10">
            <div className="basis-11/12 flex-col">
                <div className="flex">
                    <h1 className="mb-4 mr-1 text-xl font-semibold">{title}</h1>
                    {link && (
                        <a href={link}>
                            <button
                                type="button"
                                className="p-1 text-gray-500 duration-100 ease-in hover:scale-110 hover:text-highlight"
                            >
                                <svg
                                    aria-hidden="true"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M14.851 11.923c-.179-.641-.521-1.246-1.025-1.749-1.562-1.562-4.095-1.563-5.657 0l-4.998 4.998c-1.562 1.563-1.563 4.095 0 5.657 1.562 1.563 4.096 1.561 5.656 0l3.842-3.841.333.009c.404 0 .802-.04 1.189-.117l-4.657 4.656c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-1.952-1.951-1.952-5.12 0-7.071l4.998-4.998c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464.493.493.861 1.063 1.105 1.672l-.787.784zm-5.703.147c.178.643.521 1.25 1.026 1.756 1.562 1.563 4.096 1.561 5.656 0l4.999-4.998c1.563-1.562 1.563-4.095 0-5.657-1.562-1.562-4.095-1.563-5.657 0l-3.841 3.841-.333-.009c-.404 0-.802.04-1.189.117l4.656-4.656c.975-.976 2.256-1.464 3.536-1.464 1.279 0 2.56.488 3.535 1.464 1.951 1.951 1.951 5.119 0 7.071l-4.999 4.998c-.975.976-2.255 1.464-3.535 1.464-1.28 0-2.56-.488-3.535-1.464-.494-.495-.863-1.067-1.107-1.678l.788-.785z" />
                                </svg>
                            </button>
                        </a>
                    )}
                </div>

                <Skills skills={skills} />

                <p className="mb-3 text-sm leading-8">{description}</p>
                {hasBlog && (
                    <Link
                        href={`/projects/${id}`}
                        className="text-sm text-highlight underline duration-150 ease-in hover:no-underline"
                    >
                        Learn More
                    </Link>
                )}
            </div>

            <div className="order-first mb-6 flex basis-1/2 justify-items-center xl:order-last xl:mb-0 xl:justify-end">
                {thumbnail && (
                    <Image
                        src={thumbnail}
                        alt="alt"
                        width={300}
                        height={0}
                        className="shrink-0 basis-1/2 self-start shadow-md shadow-gray-600"
                    />
                )}
            </div>
        </div>
    );
}
