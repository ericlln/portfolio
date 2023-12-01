import { redirect } from 'next/navigation';
import prisma from '@/lib/prisma';

export const revalidate = 0;

async function findMostRecentRecord() {
    const mostRecentRecord = await prisma.gallery.findMany({
        take: 1,
        orderBy: {
            dateAdded: 'desc',
        },
    });
    return mostRecentRecord;
}

export default async function Photos() {
    const mostRecentRecord = await findMostRecentRecord();
    const month = mostRecentRecord[0].dateAdded.getMonth() + 1;
    const year = mostRecentRecord[0].dateAdded.getFullYear();
    let monthYear = month.toString() + year;
    monthYear = monthYear.padStart(6, '0');
    redirect(`/gallery/${monthYear}`);
}
