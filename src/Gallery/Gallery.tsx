'use client';

import { useState } from 'react';
import classNames from 'classnames';

import Carousel from './Carousel';
import Image from 'next/image';

interface Image {
    id: number;
    url: string;
}

interface ImageArray {
    images: Image[];
}

const getStartingIndex = (len: number): number => {
    return len & 1 ? (len - 1) / 2 : len / 2;
};

export default function Gallery({ images }: ImageArray) {
    const [isLoading, setLoading] = useState(true);

    return (
        <>
            <div>
                <Carousel startIndex={getStartingIndex(images.length)}>
                    {images &&
                        images.map((image, i) => (
                            <Image
                                key={i}
                                src={image.url}
                                width={500}
                                height={400}
                                alt="alt"
                                onLoad={() => setLoading(false)}
                                className={classNames({
                                    'duration-700 ease-in-out': true,
                                    'scale-105 blur-2xl': isLoading,
                                    'scale-100 blur-0 grayscale-0': !isLoading,
                                })}
                            />
                        ))}
                </Carousel>
            </div>
        </>
    );
}
