// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors"); // Import the cors middleware
const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

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

server.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
