"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ClientOnly from "../../utils/clientOnly";

export default function Lobby({ NftId }) {
  const { address, isConnected } = useAccount();

  // GET NFT ID
  useEffect(() => {}, []);

  // POST req to /api/lobby with NFT ID and address
  useEffect(() => {
    if (address) {
      // const data = {
      //     PlayerAddress,
      //     NftId
      // }
      // fetch('/api/lobby',{body:JSON.stringify(data)}).then().catch()
    }
  }, [isConnected]);

  // process
  // 1 - find NftId if not given using get req
  // 2 - post the data to server
  // 3 - if someone else pings, send them both to same room
  // 4 - will probably need socketio

  return (
    <ClientOnly>
      {isConnected ? (
        <section className="bg-primary min-h-screen flex flex-col items-center justify-evenly">
          <h1 className="text-4xl text-secondary font-bold font-Handjet mb-10">
            Lobby - waiting for other player to join !
          </h1>
          <img
            src="/images/loading.gif"
            alt="Loading GIF"
            width={300}
            height={200}
          />
          <script
            type="text/javascript"
            async
            src="https://tenor.com/embed.js"
          ></script>
        </section>
      ) : (
        <h1 className="text-4xl text-secondary font-bold font-Handjet mb-10">
          Connect wallet to play!
        </h1>
      )}
    </ClientOnly>
  );
}
