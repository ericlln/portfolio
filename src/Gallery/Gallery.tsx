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

export default function Gallery({ images }: ImageArray) {
    const [isLoading, setLoading] = useState(true);

    return (
        <>
            <div>
                <Carousel startIndex={1}>
                    {images &&
                        images.map((image, i) => (
                            <Image
                                key={i}
                                src={image.url}
                                width={400}
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
