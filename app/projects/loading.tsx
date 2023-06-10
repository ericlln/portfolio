import Navbar from '@/src/Navbar/Navbar';
import TextPlaceholder from '@/src/Skeleton/TextPlaceholder';
import ImagePlaceholder from '@/src/Skeleton/ImagePlaceholder';

export default function LoadingProjects() {
	const placeholderProjects = [0, 1, 2, 3];

	return (
		<>
			<Navbar />
			<div className="flex flex-col gap-x-14 gap-y-8 justify-items-center items-center mx-auto my-12">
				{placeholderProjects.map((i) => (
					<div key={i} className="flex flex-col bg-gray-100 w-2/3 rounded-lg py-8 px-10 xl:flex-row xl:space-x-10">
						<div className="flex flex-col basis-2/3">
							<TextPlaceholder />
						</div>
						<div className="basis-1/3 order-first mb-6 xl:mb-0 xl:order-last">
							<ImagePlaceholder />
						</div>
					</div>
				))}
			</div>
		</>
	);
}
