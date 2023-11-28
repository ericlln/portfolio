import { redirect } from 'next/navigation';

export default async function Photos() {
    const today = new Date();
    const month = today.getMonth() + 1;
    let monthYear = month.toString() + today.getFullYear();
    monthYear = monthYear.padStart(6, '0');
    redirect(`/gallery/${monthYear}`);
}
