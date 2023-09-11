import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase-config";

export async function addFavMovie(movieId, uid) {
  try {
    await updateDoc(doc(db, "users", uid), {
      favMovie: arrayUnion(movieId),
    });
    console.log("add fav movie success");
  } catch (error) {
    console.log(error);
  }
}

export async function removeFavMovie(movieId, uid) {
  try {
    await updateDoc(doc(db, "users", uid), {
      favMovie: arrayRemove(movieId),
    });
    console.log("remove fav movie success");
  } catch (error) {
    console.log(error);
  }
}
