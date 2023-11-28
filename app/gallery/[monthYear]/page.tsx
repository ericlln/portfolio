import prisma from '@/lib/prisma';
import Link from 'next/link';

import Navbar from '@/src/Navbar/Navbar';
import Gallery from '@/src/Gallery/Gallery';
import GalleryControls from '@/src/Gallery/GalleryControls';

async function getImages(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    const res = await prisma.gallery.findMany({
        where: { dateAdded: { gte: new Date(year, month - 1, 1), lt: new Date(year, month, 1) } },
    });
    return res;
}

async function getAvailableMonths() {
    const result = await prisma.gallery.groupBy({
        by: ['dateAdded'],
        _count: {
            dateAdded: true,
        },
    });

    const monthYears: { [key: string]: number } = {};

    result.forEach((day) => {
        if (!day.dateAdded) {
            return;
        }

        const month = (day.dateAdded?.getMonth() + 1).toString();
        const year = day.dateAdded?.getFullYear();
        if (month && year) {
            let key = month + year;
            key = key.padStart(6, '0');

            if (!(key in monthYears)) {
                monthYears[key] = day._count.dateAdded;
            } else {
                let newCount = monthYears[key] + day._count.dateAdded;
                monthYears[key] = newCount;
            }
        }
    });

    return monthYears;
}

export default async function Photos({ params }: { params: { monthYear: string } }) {
    const monthYear = params.monthYear;
    const monthYears = await getAvailableMonths();

    const monthYearDate = new Date(
        parseInt(monthYear.slice(2, 6)),
        parseInt(monthYear.slice(0, 2)) - 1,
    );

    const images = await getImages(monthYearDate);

    return (
        <>
            <div className="flex h-screen flex-col">
                <Navbar />
                {monthYear.length === 6 ? (
                    images.length !== 0 ? (
                        <div className="mx-auto my-10 w-3/4">
                            <GalleryControls
                                monthYears={monthYears}
                                currMonthYear={monthYearDate}
                            />
                            <Gallery images={images} />
                        </div>
                    ) : (
                        <>
                            <div className="flex h-screen">
                                <div className="m-auto text-center">
                                    <h1 className=" mb-4 text-2xl font-semibold text-gray-500">
                                        There are no photos here. Pick another month from below.
                                    </h1>
                                    <GalleryControls
                                        monthYears={monthYears}
                                        currMonthYear={monthYearDate}
                                    />
                                </div>
                            </div>
                        </>
                    )
                ) : (
                    <>
                        <div className="flex h-screen">
                            <div className="m-auto text-center">
                                <h1 className=" mb-2 text-2xl font-semibold text-gray-500">
                                    Invalid URL
                                </h1>
                                <Link href="/" className="text-highlight underline">
                                    Go home
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
