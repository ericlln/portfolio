import Navbar from '@/src/Navbar/Navbar';
import TextPlaceholder from '@/src/Skeleton/TextPlaceholder';
import ImagePlaceholder from '@/src/Skeleton/ImagePlaceholder';

export default function LoadingProjects() {
    const placeholderProjects = [0, 1, 2, 3];

    return (
        <>
            <Navbar />
            <div className="mx-auto my-12 flex flex-col items-center justify-items-center gap-x-14 gap-y-8">
                {placeholderProjects.map((i) => (
                    <div
                        key={i}
                        className="flex w-2/3 flex-col rounded-lg bg-gray-100 px-10 py-8 xl:flex-row xl:space-x-10"
                    >
                        <div className="flex basis-2/3 flex-col">
                            <TextPlaceholder />
                        </div>
                        <div className="order-first mb-6 flex basis-1/2 justify-items-center xl:order-last xl:mb-0 xl:justify-end">
                            <ImagePlaceholder />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
