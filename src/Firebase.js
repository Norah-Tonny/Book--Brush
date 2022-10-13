// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCumn2SJzLOPhva4oJDBCRuZTGOsjTIN54",
  authDomain: "book-brush-e17be.firebaseapp.com",
  projectId: "book-brush-e17be",
  storageBucket: "book-brush-e17be.appspot.com",
  messagingSenderId: "608638159628",
  appId: "1:608638159628:web:c3bd0a804a0f4719431729",
  measurementId: "G-4BYXTK3B0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app)

