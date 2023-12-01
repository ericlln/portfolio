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
        <div className="bg-teagreen absolute left-0 z-50 mx-12 mt-6 flex h-auto w-[calc(100vw-6rem)] justify-between shadow-2xl sm:left-auto sm:mx-0 sm:w-auto ">
            <div className="flex w-full basis-1/3 flex-col p-3">
                {yearList.map((year) => (
                    <button
                        key={year}
                        onClick={(e) => selectYear(e, year)}
                        className={classNames({
                            'm-2 rounded-lg bg-highlight p-2 text-left font-semibold text-white shadow-lg':
                                true,
                            'ring-2 ring-[#2D3047]': currYear == parseInt(year),
                            'ring-0': currYear != parseInt(year),
                        })}
                    >
                        {year}
                    </button>
                ))}
            </div>
            <div className="my-3 w-2 rounded-full bg-[#2D3047]"></div>
            <div className="flex w-full flex-col p-3 ">
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
                                'm-2 mb-1 inline-flex justify-between gap-5 rounded-lg bg-highlight p-2 text-left text-sm font-semibold text-white':
                                    true,
                                'ring-2 ring-[#2D3047]': currMonth == parseInt(key.slice(0, 2)),
                                'ring-0': currMonth != parseInt(key.slice(0, 2)),
                            })}
                        >
                            <p>{monthNames[parseInt(key.slice(0, 2)) - 1]}</p>
                            <p className="">{`(${value})`}</p>
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default GalleryDropdown;
