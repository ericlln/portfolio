'use client';

import React, { PropsWithChildren } from 'react';
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react';
import CarouselControls from './CarouselControls';

type CarouselProps = PropsWithChildren & EmblaOptionsType;

export default function Carousel({ children, ...options }: CarouselProps) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	
	const canScrollNext = !!emblaApi?.canScrollNext;
	const canScrollPrev = !!emblaApi?.canScrollPrev;

	return (
		<div className="overflow-hidden" ref={emblaRef}>
			<div className="flex mb-4">{children}</div>
			<CarouselControls
				canScrollNext={canScrollNext}
				canScrollPrev={canScrollPrev}
				onNext={() => emblaApi?.scrollTo(emblaApi?.selectedScrollSnap() + 1)}
				onPrev={() => emblaApi?.scrollTo(emblaApi?.selectedScrollSnap() - 1)}
			/>
		</div>
	);
}
