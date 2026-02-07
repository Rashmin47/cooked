import { currentUser } from "@clerk/nextjs/server";
const STRAPI_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
export const checkUser = async () => {
  const user = await currentUser();
  if (!user) {
    console.log("No User found");
    return null;
  }
};
