// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBTZEo1Ke9cVU24sH7lLqKVHMliRSqB6Os",
    authDomain: "endevaour-2023.firebaseapp.com",
    projectId: "endevaour-2023",
    storageBucket: "endevaour-2023.appspot.com",
    messagingSenderId: "469326522625",
    appId: "1:469326522625:android:775689dd637965d7981300"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };