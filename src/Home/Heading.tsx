import Link from 'next/link';
import React from 'react';
import Socials from './Socials';

const Heading = () => {
    return (
        <div className="px-12 pt-12 antialiased">
            <div className="flex flex-col">
                <h1 className="text-center font-title text-7xl text-gray-600 sm:text-left">
                    Eric Lin
                </h1>
                <h2 className="mb-4 text-center font-sans text-lg font-semibold text-highlight sm:text-left">
                    Systems Design Engineering @ UW
                </h2>
                <div className="mb-8 flex justify-center sm:justify-start">
                    <Socials />
                </div>
                <p className="w-max-w text-center leading-8 md:w-1/2 md:text-left lg:w-1/3 xl:w-1/4">
                    Hi, I am currently a first year student at University of Waterloo! I am
                    interested in all aspects of software development, especially after my recent
                    internship where I worked in full-stack development. You can read more about my
                    experiences in my{' '}
                    <Link href="/projects" className="text-green-800 underline">
                        projects
                    </Link>
                    . In my spare time I enjoy exercising, playing video games, and taking photos
                    &mdash; some of which can be found in my{' '}
                    {
                        <Link href="/gallery" className="text-green-800 underline">
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
