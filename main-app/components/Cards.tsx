'use client';

import Card from "./Card";
import ClientOnly from '../app/clientOnly';

export default function Cards(){
    // Create an array of 30 items for the grid
	const items = Array.from({ length: 30 }, (_, index) => index + 1);

    return (
        <ClientOnly>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                {items.map((item) => (
                    <Card item={item} />
                ))}
            </div>
        </ ClientOnly >
    )
}