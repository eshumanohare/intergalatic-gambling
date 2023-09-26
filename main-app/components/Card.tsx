"use client";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function Card({ item, index }) {
  const { isConnected } = useAccount();
  return (
    <div key={item} className="bg-zinc-950 p-4 text-center rounded-lg">
      <img
        src={`https://brown-written-gayal-909.mypinata.cloud/ipfs/QmdQYeMhzD2LocJMErzFvTLA64ikC6Ebz6saWBddZvbq6c/${index}.png`}
        alt="Image"
        className="w-72 h-72 mx-auto mb-4"
      />
      <div className="flex justify-between items-center">
        <p className="text-secondary font-bold">{item.name}</p>
        {isConnected ? (
          <button className="bg-secondary text-primary px-2 py-1 rounded-sm text-xl font-bold font-Handjet">
            Get NFT
          </button>
        ) : (
          <p className="text-white font-bold">---</p>
        )}
        {/* <button className='bg-myred text-primary px-2 py-1 rounded-sm text-xl font-bold font-Handjet'>
					Sold Out
                </button> */}
      </div>
    </div>
  );
}
