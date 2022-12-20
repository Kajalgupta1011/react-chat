import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "chat-ab746.firebaseapp.com",
//   projectId: "chat-ab746",
//   storageBucket: "chat-ab746.appspot.com",
//   messagingSenderId: "901216368405",
//   appId: "1:901216368405:web:8ec942ee51611df5c49b1c",
// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8PbIkUZ5OWzAH-1ghk_DGAWFjMcQbEOk",
  authDomain: "chatapp-a2315.firebaseapp.com",
  projectId: "chatapp-a2315",
  storageBucket: "chatapp-a2315.appspot.com",
  messagingSenderId: "361651056996",
  appId: "1:361651056996:web:da25b480e76b627d07ca71",
  measurementId: "G-ZYE80XMVP0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
