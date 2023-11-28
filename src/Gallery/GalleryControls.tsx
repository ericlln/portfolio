'use client';

import { useState } from 'react';
import Link from 'next/link';

const convertForComparison = (monthYear: string): number => {
    const year = monthYear.slice(2);
    const month = monthYear.slice(0, 2);
    return parseInt(year + month);
};

const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

interface Props {
    monthYears: { [key: string]: number };
    currMonthYear: string;
}

const GalleryControls = ({ monthYears, currMonthYear }: Props) => {
    const [modal, setModal] = useState(false);

    const month = parseInt(currMonthYear.slice(0, 2)) - 1;
    const monthString = monthNames[month];
    const year = currMonthYear.slice(2, 6);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="m-auto mb-6 w-full">
                <div className="w-full">
                    <button
                        type="button"
                        onClick={toggleModal}
                        className="text-md inline-flex w-full gap-x-2 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 ring-1 ring-inset ring-gray-300"
                    >
                        {`${monthString} ${year}`}
                        <svg
                            className="mr-1 h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {modal && (
                    <div className="absolute z-50 m-auto my-3 rounded-md bg-red-300 shadow-xl md:w-1/12">
                        <div className="flex flex-col p-3">
                            {Object.entries(monthYears)
                                .sort(
                                    ([keyA], [keyB]) =>
                                        convertForComparison(keyB) - convertForComparison(keyA),
                                )
                                .map(([key, value]) => (
                                    <Link
                                        key={key}
                                        href={`/gallery/${key}`}
                                        className="mb-2 underline"
                                    >
                                        {key.slice(2, 6)}-{key.slice(0, 2)} ({value})
                                    </Link>
                                ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default GalleryControls;