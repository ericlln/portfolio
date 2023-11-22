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
                    <h1 className=" mb-2 text-2xl font-semibold text-gray-500">
                        Something went wrong!
                    </h1>
                    <button className="text-highlight underline" onClick={() => reset()}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
}
