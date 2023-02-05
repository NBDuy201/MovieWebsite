import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8-RarlB93EsePfPuL4OlUPBC_7pV6zV0",
  authDomain: "pixol-8487c.firebaseapp.com",
  projectId: "pixol-8487c",
  storageBucket: "pixol-8487c.appspot.com",
  messagingSenderId: "912507976601",
  appId: "1:912507976601:web:4eb48ac25d7f050cc5f108",
  measurementId: "G-NGG4DJKX10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { analytics, db, auth };
