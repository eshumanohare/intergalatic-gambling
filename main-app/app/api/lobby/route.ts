import { createRedisInstance } from "../../../utils/redisConfig";
import { Server } from "socket.io";

// TODO: clean up here, most functionality here is present in socket.ts file
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const addr = searchParams.get("address");

  console.log(addr);

  //TODO: make a call to the blockchain

  return new Response(
    JSON.stringify({
      tokenId: 1,
    }),
  );
}

export async function POST(request: Request) {
  const redis = createRedisInstance();
  const key = getRandomKey();

  // storing data
  await redis.set(key, "hi mom");

  // getting data (using the same key as above)
  const value = await redis.get(key);

  // we can also increment a value by <N>
  // await redis.incrby(key, 1);

  return new Response(value);
}

function getRandomKey() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    key += characters.charAt(randomIndex);
  }

  return key;
}
