// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzn9qdzgjtzc-MGMapdouEF28TiSUnFgI",
  authDomain: "ml-tecnologia.firebaseapp.com",
  projectId: "ml-tecnologia",
  storageBucket: "ml-tecnologia.appspot.com",
  messagingSenderId: "798023792045",
  appId: "1:798023792045:web:e83c7ac15e19061eca5d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//refencia a la base de datos
export const db = getFirestore(app);
export const auth = getAuth(app);