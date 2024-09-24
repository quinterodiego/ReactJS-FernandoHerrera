import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBkcuuQu_5N3B5ZkYIjJ5iMCrQNbZgNiDM",
  authDomain: "journalapp-80b9e.firebaseapp.com",
  projectId: "journalapp-80b9e",
  storageBucket: "journalapp-80b9e.appspot.com",
  messagingSenderId: "649138483949",
  appId: "1:649138483949:web:419099dd311adc099652e4"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp)