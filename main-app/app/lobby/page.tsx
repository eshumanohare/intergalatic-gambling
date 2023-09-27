"use client";

import { useEffect } from "react";
import { useAccount } from "wagmi";
import ClientOnly from "../../utils/clientOnly";
import { useRouter } from "next/navigation";
import { io, type Socket } from "socket.io-client";
import type {
  ServerToClientEvents,
  ClientToServerEvents,
} from "../../utils/socketCustomTypes";

let socket: Socket<ServerToClientEvents, ClientToServerEvents> | null = null;

export default function Lobby({}) {
  const { isConnected } = useAccount();
  const router = useRouter();

  // Putting the player into the waiting queue using socket.io
  useEffect(() => {
    if (!socket) {
      void fetch("/api/socket");
      socket = io();

      socket.on("connect", () => {
        console.log("connected");
      });

      socket.on("hello", (msg: string) => {
        console.log("hello", msg);
      });

      socket.on("userServerConnection", () => {
        console.log("a user connected (client)");
      });

      socket.on("userServerDisconnection", (socketid: string) => {
        console.log(socketid);
      });
    }
    // const socket = io("/api/socket");

    // socket.on("connect", () => {
    //   console.log("You are connected to the server");
    // });

    // if (address) {
    //   socket.on("match", ({ roomIdentifier }) => {
    //     // Handle the match event here, e.g., navigate to the room
    //     console.log(`Matched with room: ${roomIdentifier}`);
    //     router.push(`/room/${roomIdentifier}`);
    //   });
    // }

    return () => {
      if (socket) {
        socket.disconnect();
        socket = null;
      }
    };
  }, []);

  // process
  // 1 - find NftId if not given using get req
  // 2 - post the data to server
  // 3 - if someone else pings, send them both to same room
  // 4 - will probably need socketio

  return (
    <ClientOnly>
      {isConnected ? (
        <section className="bg-primary min-h-screen flex flex-col items-center justify-evenly">
          <h1 className="text-4xl text-secondary font-bold font-Handjet">
            Lobby - waiting for other player to join!
          </h1>
          <img
            src="/images/loading.gif"
            alt="Loading GIF"
            width={300}
            height={200}
          />
        </section>
      ) : (
        <h1 className="text-4xl text-secondary font-bold font-Handjet mb-10">
          Connect wallet to play!
        </h1>
      )}
    </ClientOnly>
  );
}
