import { useEffect, useState } from "react";
import Web3 from "web3";
import { io, Socket } from "socket.io-client";

export default function Home() {
  const [userAddress, setUserAddress] = useState<string | null>(null);
  let ethereum;

  const connectToMetaMask = async () => {
    if (typeof ethereum !== "undefined") {
      const web3 = new Web3(ethereum);

      try {
        // Request MetaMask account acceßss
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const userAddress = accounts[0];
        setUserAddress(userAddress);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      console.error(
        "MetaMask not detected. Please install MetaMask to use this website."
      );
    }
  };

  const disconnectFromMetaMask = () => {
    // Log out the user by setting userAddress to null
    setUserAddress(null);
  };

  useEffect(() => {
    if (typeof window !== undefined) {
      // @ts-ignore
      ethereum = window.ethereum;

      const socket: Socket = io("http://localhost:3001");

      socket.on("connect", () => {
        console.log(`Connected to server with socket ID: ${socket.id}`);
      });

      // Listen for match events from the server
      socket.on("match", ({ roomIdentifier }) => {
        // Handle the match event here (navigate to the room, etc.)
        console.log(`Matched with room: ${roomIdentifier}`);
      });
    }
  }, []);

  return (
    <div>
      <h1>MetaMask Authentication Example</h1>
      {userAddress ? (
        <div>
          <div>Connected with address: {userAddress}</div>
          <button onClick={disconnectFromMetaMask}>Log Out</button>
        </div>
      ) : (
        <button onClick={connectToMetaMask}>Log In with MetaMask</button>
      )}
    </div>
  );
}
