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
            <div className="mb-6">
                <button
                    type="button"
                    onClick={toggleModal}
                    className="inline-flex w-full scale-100 transform gap-x-2 rounded-md bg-white px-3 py-2 text-xl font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 duration-150 ease-in sm:w-auto sm:hover:bg-highlight sm:hover:text-white"
                >
                    {`${monthString} ${year}`}
                    <svg
                        className="h-7 w-6"
                        viewBox="0 -960 960 960"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        {modal ? (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="m296-345-56-56 240-240 240 240-56 56-184-184-184 184Z"
                            />
                        ) : (
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"
                            />
                        )}
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
