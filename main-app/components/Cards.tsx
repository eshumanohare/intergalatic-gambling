"use client";

import Card from "./Card";
import ClientOnly from "../utils/clientOnly";
import { useEffect, useState } from "react";

type Item = {
  name: string;
  imageUrl: string;
};

export default function Cards() {
  const [data, setData] = useState([]);

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
        setData(responseData.data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  // FETCH IF NFT IS SOLD

  return (
    <ClientOnly>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((item: Item, i) => (
          <Card item={item} index={i + 1} />
        ))}
      </div>
    </ClientOnly>
  );
}
