import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "~/firebase/firebase-config";

export async function fetchCollection(collectionName, id) {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchCollections(collectionName) {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const list = [];
    querySnapshot.forEach((doc) => {
      list.push(doc.data());
    });
    return list;
  } catch (error) {
    console.log(error);
  }
}
