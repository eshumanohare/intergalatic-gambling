"use client";

import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ClientOnly from "../../utils/clientOnly";
import { io } from "socket.io-client";

export default function Lobby({ NftId }) {
  const { address, isConnected } = useAccount();
  const [matched, setMatched] = useState<boolean | null>(null);
  const [roomID, setRoomID] = useState<Number | null>(null);

  // GET NFT ID
  useEffect(() => {}, []);

  // POST req to /api/lobby with NFT ID and address

  // Putting the player into the waiting queue using socket.io
  useEffect(() => {
    const socket = io("http://localhost:3001");

    // socket.on("connect", () => {
    //   console.log("You are connected to the server");
    // });

    if (address) {
      socket.on("match", ({ roomIdentifier }) => {
        // Handle the match event here, e.g., navigate to the room
        console.log(`Matched with room: ${roomIdentifier}`);
        setMatched(true);
        setRoomID(roomIdentifier);
      });
    }
    return () => {
      // Cleanup code if needed
      socket.disconnect();
    };
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
          {matched ? (
            <div>
              <h1 className="text-4xl text-secondary font-bold font-Handjet">
                <h4>You are matched - {roomID}</h4>
              </h1>
            </div>
          ) : (
            <>
              <h1 className="text-4xl text-secondary font-bold font-Handjet mb-10">
                Lobby - waiting for other player to join!
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
            </>
          )}
        </section>
      ) : (
        <h1 className="text-4xl text-secondary font-bold font-Handjet mb-10">
          Connect wallet to play!
        </h1>
      )}
    </ClientOnly>
  );
}
