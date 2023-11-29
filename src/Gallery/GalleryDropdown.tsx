'use client';

import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { monthNames } from '@/lib/Util';

interface Props {
    monthYears: { [key: string]: number };
    currMonthYear: string;
}

const convertForComparison = (monthYear: string): number => {
    const year = monthYear.slice(2);
    const month = monthYear.slice(0, 2);
    return parseInt(year + month);
};

const GalleryDropdown = ({ monthYears, currMonthYear }: Props) => {
    const [currYear, setCurrYear] = useState(parseInt(currMonthYear.slice(2)));
    const [currMonth, setCurrMonth] = useState(parseInt(currMonthYear.slice(0, 2)));
    const router = useRouter();

    const selectYear = (e: React.MouseEvent<HTMLButtonElement>, year: string) => {
        e.preventDefault();
        setCurrYear(parseInt(year));
        const yearInLink = parseInt(currMonthYear.slice(2));
        const monthInLink = parseInt(currMonthYear.slice(0, 2));
        parseInt(year) == yearInLink ? setCurrMonth(monthInLink) : setCurrMonth(-1);
    };

    const redirectToMonth = (e: React.MouseEvent<HTMLButtonElement>, key: string) => {
        e.preventDefault();
        setCurrMonth(parseInt(key.slice(0, 2)));
        router.push(`/gallery/${key}`);
    };

    const isMonthAvailable = ([key, value]: [string, number]): boolean => {
        return parseInt(key.slice(2)) == currYear;
    };

    const yearList: string[] = [];
    Object.entries(monthYears)
        .sort(([keyA], [keyB]) => convertForComparison(keyB) - convertForComparison(keyA))
        .forEach(([key, value]) => {
            const year = key.slice(2);
            if (!yearList.includes(year)) {
                yearList.push(year);
            }
        });

    return (
        <div className="absolute z-50 mt-4 flex justify-between rounded-md bg-highlight shadow-xl ">
            <div className="flex w-full basis-1/3 flex-col p-3">
                {yearList.map((year) => (
                    <button
                        key={year}
                        onClick={(e) => selectYear(e, year)}
                        className={classNames({
                            'm-2 rounded-lg bg-white p-2 text-left text-xl shadow-lg ': true,
                            'ring-2 ring-black': currYear == parseInt(year),
                            'ring-0': currYear != parseInt(year),
                        })}
                    >
                        {year}
                    </button>
                ))}
            </div>
            <div className="w-2 bg-white"></div>
            <div className="flex w-full flex-col p-3">
                {Object.entries(monthYears)
                    .sort(
                        ([keyA], [keyB]) => convertForComparison(keyB) - convertForComparison(keyA),
                    )
                    .filter(isMonthAvailable)
                    .map(([key, value]) => (
                        <button
                            key={key}
                            onClick={(e) => redirectToMonth(e, key)}
                            className={classNames({
                                'm-2 mb-1 rounded-lg bg-white p-2 text-left': true,
                                'ring-2 ring-black': currMonth == parseInt(key.slice(0, 2)),
                                'ring-0': currMonth != parseInt(key.slice(0, 2)),
                            })}
                        >
                            {monthNames[parseInt(key.slice(0, 2)) - 1]} {`(${value} photos)`}
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default GalleryDropdown;
