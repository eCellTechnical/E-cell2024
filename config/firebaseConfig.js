// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDWu6S4QQkExB3b5UVpzKr_uQ4_b6B0DpI",
  authDomain: "endeavour-bed2e.firebaseapp.com",
  projectId: "endeavour-bed2e",
  storageBucket: "endeavour-bed2e.appspot.com",
  messagingSenderId: "488287052112",
  appId: "1:488287052112:web:87c188a382724689e10c55",
  measurementId: "G-J24TS13780",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
