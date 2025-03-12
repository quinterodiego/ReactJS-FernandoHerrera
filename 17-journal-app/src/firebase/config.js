// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkcuuQu_5N3B5ZkYIjJ5iMCrQNbZgNiDM",
  authDomain: "journalapp-80b9e.firebaseapp.com",
  projectId: "journalapp-80b9e",
  storageBucket: "journalapp-80b9e.firebasestorage.app",
  messagingSenderId: "649138483949",
  appId: "1:649138483949:web:419099dd311adc099652e4"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);