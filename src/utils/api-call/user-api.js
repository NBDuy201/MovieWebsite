import { fetchCollection } from "./fire-base-api";

export async function getUserInfo(uid) {
  try {
    const userInfo = await fetchCollection("users", uid);
    return userInfo;
  } catch (error) {
    console.log(error);
  }
}
