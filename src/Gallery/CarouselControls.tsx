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
                className="h-12 w-1/2 bg-gray-300 text-gray-800 duration-150 ease-in hover:bg-highlight hover:text-white"
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
                className="h-12 w-1/2 bg-gray-300 text-gray-800 duration-150 ease-in hover:bg-highlight hover:text-white"
            >
                <h1 className="text-sm font-semibold">Next</h1>
            </button>
        </div>
    );
}
