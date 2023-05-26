'use client';

import Carousel from './Carousel';
import Image from 'next/image';

interface Image {
	id: number;
	url: string;
}

interface ImageArray {
	images: Image[];
}

export default function Gallery({ images }: ImageArray) {
	return (
		<div>
			<Carousel startIndex={1} >
				{images &&
					images.map((image, i) => (
						<Image key={i} src={image.url} width={400} height={400} alt="alt" />
					))}
			</Carousel>
		</div>
	);
}
