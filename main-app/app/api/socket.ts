import type { Server as HTTPServer } from "http";
import type { NextApiRequest, NextApiResponse } from "next";
import type { Socket as NetSocket } from "net";
import type { Server as IOServer } from "socket.io";

import { Server } from "socket.io";

const io = require("socket.io")(Server, {
  cors: {
    origin: "*",
  },
});

interface SocketServer extends HTTPServer {
  io?: IOServer | undefined;
}

interface SocketWithIO extends NetSocket {
  server: SocketServer;
}

interface NextApiResponseWithSocket extends NextApiResponse {
  socket: SocketWithIO;
}

const waitingQueue = [];

// Function to handle matchmaking
const handleMatchmaking = () => {
  if (waitingQueue.length >= 2) {
    const [player1, player2] = waitingQueue.splice(0, 2);

    // Simulated room creation (in practice, implement actual room creation logic)
    const roomIdentifier = `room_${Math.random().toString(36).substring(7)}`;

    // Notify matched players about the room (using WebSockets)
    io.to(player1).to(player2).emit("match", { roomIdentifier });

    console.log(
      `Matched players: ${player1} and ${player2}\nRoom: ${roomIdentifier}`,
    );
  }
};

const SocketHandler = (_: NextApiRequest, res: NextApiResponseWithSocket) => {
  if (res.socket.server.io) {
    console.log("Socket is already running.");
  } else {
    console.log("Socket is initializing...");

    // const io = new Server(res.socket.server);
    const io = new Server(res.socket.server, {
      path: "/api/socket",
      addTrailingSlash: false,
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log(`User connected: ${socket.id}`);

      // Add the connected player to the waiting queue
      waitingQueue.push(socket.id);

      // Handle matchmaking whenever a player connects
      handleMatchmaking();

      socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);

        // Remove disconnected player from the waiting queue
        const index = waitingQueue.indexOf(socket.id);
        if (index !== -1) {
          waitingQueue.splice(index, 1);
        }
      });
    });
  }

  res.end();
};

export default SocketHandler;
