import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqSOZXgN6t7ijPJMOEXz1spTS4k-amX1U",
  authDomain: "react-next-shop-app-bc0c0.firebaseapp.com",
  projectId: "react-next-shop-app-bc0c0",
  storageBucket: "react-next-shop-app-bc0c0.appspot.com",
  messagingSenderId: "830870341812",
  appId: "1:830870341812:web:63c36a9e9b5a5dd8016fe1",
  measurementId: "G-HCH07SPN1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;