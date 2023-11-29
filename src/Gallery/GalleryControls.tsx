'use client';

import { useState } from 'react';
import GalleryDropdown from './GalleryDropdown';
import { monthNames } from '@/lib/Util';

interface Props {
    monthYears: { [key: string]: number };
    currMonthYear: string;
}

const GalleryControls = ({ monthYears, currMonthYear }: Props) => {
    const [modal, setModal] = useState(false);

    const month = parseInt(currMonthYear.slice(0, 2)) - 1;
    const monthString = monthNames[month];
    const year = currMonthYear.slice(2);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <div className="mb-6 w-auto">
                <button
                    type="button"
                    onClick={toggleModal}
                    className="inline-flex gap-x-2 rounded-md bg-white px-3 py-2 text-xl font-semibold text-gray-900 ring-1 ring-inset ring-gray-300"
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
                <div>
                    {modal && (
                        <GalleryDropdown monthYears={monthYears} currMonthYear={currMonthYear} />
                    )}
                </div>
            </div>
        </>
    );
};

export default GalleryControls;
