import prisma from '@/lib/prisma';

import Navbar from '@/src/Navbar/Navbar';
import Gallery from '@/src/Gallery/Gallery';

export const revalidate = 0;

async function getData() {
    const res = await prisma.gallery.findMany();
    return res;
}

export default async function Photos() {
    const images = await getData();

    return (
        <>
            <Navbar />
            <div className="mx-auto my-10 w-3/4">
                <h1>Test</h1>
                <Gallery images={images} />
            </div>
        </>
    );
}
