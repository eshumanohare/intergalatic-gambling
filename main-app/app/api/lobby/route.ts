import { NextApiRequest, NextApiResponse } from "next";
import { createRedisInstance } from "../../../utils/redisConfig";

export async function GET(Request: NextApiRequest) {
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
