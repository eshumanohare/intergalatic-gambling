"use client";
import { useAccount } from "wagmi";
import ClientOnly from "../app/clientOnly";

export default function Note() {
  const { isConnected } = useAccount();

  return (
    <ClientOnly>
      {isConnected ? (
        <> </>
      ) : (
        <p className="text-myred text-xl font-bold font-Josefin my-10">
          Note : Connect to wallet to get the NFT
        </p>
      )}
    </ClientOnly>
  );
}
