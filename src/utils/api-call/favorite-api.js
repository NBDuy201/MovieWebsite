import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "~/firebase/firebase-config";

export async function addFavMovie(movieData, uid) {
  try {
    await updateDoc(doc(db, "users", uid), {
      favMovie: arrayUnion(movieData),
    });
    console.log("add fav movie success");
  } catch (error) {
    console.log(error);
  }
}

export async function removeFavMovie(movieData, uid) {
  try {
    await updateDoc(doc(db, "users", uid), {
      favMovie: arrayRemove(movieData),
    });
    console.log("remove fav movie success");
  } catch (error) {
    console.log(error);
  }
}
