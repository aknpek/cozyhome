// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as admin from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyAYQp9xCzK9Kkaner5HO6sUOLH7KiE2UGU",
  authDomain: "cozyhome-5877e.firebaseapp.com",
  projectId: "cozyhome-5877e",
  storageBucket: "cozyhome-5877e.appspot.com",
  messagingSenderId: "982088884984",
  appId: "1:982088884984:web:88bc7f4b92f3633c2bd10d",
  measurementId: "G-LN6BF1X71K"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);

admin.initializeApp()

export const db = admin.firestore()

export default Firebase;