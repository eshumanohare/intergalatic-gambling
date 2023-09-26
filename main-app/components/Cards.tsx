"use client";

import Card from "./Card";
import ClientOnly from "../utils/clientOnly";
import { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import { contractAddress, contractABI } from "../utils/ContractInfo";

type Item = {
  name: string;
  imageUrl: string;
};

export default function Cards() {
  const [NftData, setNftData] = useState([]);

  const { data, isError, isLoading } = useContractRead({
    address: contractAddress,
    abi: contractABI,
    // functionName: '', // TODO: define the functions
  });

  useEffect(() => {
    // Define the URL you want to fetch data from
    const apiUrl =
      "https://teal-still-rat-339.mypinata.cloud/ipfs/QmdmpaEQpnWNXVUapTmVHPitmaaArJrDJqCZy75f7UZdnZ";

    // Use the fetch API to make the request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the JSON data here
        setNftData(responseData.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {NftData.map((item: Item, i) => (
          <Card
            item={item}
            index={i + 1}
            // isSold={data[i]}
          />
        ))}
      </div>
    </ClientOnly>
  );
}
