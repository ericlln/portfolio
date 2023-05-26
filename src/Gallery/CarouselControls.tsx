'use client';

type Props = {
	canScrollPrev: boolean;
	canScrollNext: boolean;
	onPrev(): void;
	onNext(): void;
};

export default function CarouselControls(props: Props) {
	return (
		<div className="flex justify-center space-x-4">
			<button
				disabled={!props.canScrollPrev}
				onClick={() => {
					if (props.canScrollPrev) {
						props.onPrev();
					}
				}}
				type="button"
				className="text-gray-800 w-1/2 h-12 bg-gray-300 hover:bg-highlight hover:text-white ease-in duration-150"
			>
                <h1 className="text-sm font-semibold">Back</h1>
			</button>
			<button
				disabled={!props.canScrollNext}
				onClick={() => {
					if (props.canScrollNext) {
						props.onNext();
					}
				}}
				type="button"
				className="text-gray-800 w-1/2 h-12 bg-gray-300 hover:bg-highlight hover:text-white ease-in duration-150"
			>
                <h1 className="text-sm font-semibold">Next</h1>
			</button>
		</div>
	);
}
