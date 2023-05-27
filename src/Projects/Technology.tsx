type TechologyProps = {
	technologies: string | null | undefined;
};

export default function Technology({ technologies }: TechologyProps) {
	const array = technologies?.split(',');

	return (
		<div className="mb-4">
			<div className="flex">
				{array &&
					array.map((technology) => (
						<div key={technology} className="py-1 px-2 bg-gray-500 mr-3 rounded-xl">
							<h1 className="text-sm text-white">{technology}</h1>
						</div>
					))}
			</div>
		</div>
	);
}
