'use client';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

export default function Card({ item }) {
	const { isConnected } = useAccount();
	return (
		<div key={item} className='bg-zinc-950 p-4 text-center rounded-lg'>
			<img
				src='images/holder.png'
				alt='Image'
				className='w-72 h-72 mx-auto mb-4'
			/>
			<div className='flex justify-between items-center'>
				<p className='text-secondary font-bold'>Name</p>
				{isConnected ? (
					<button className='bg-secondary text-primary px-2 py-1 rounded-sm text-xl font-bold font-Handjet'>
						Get NFT
					</button>
				):(<p className='text-white font-bold'>---</p>)}
				{/* <button className='bg-myred text-primary px-2 py-1 rounded-sm text-xl font-bold font-Handjet'>
					Sold Out
                </button> */}
			</div>
		</div>
	);
}
