// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQnn7EU9r1icq7i3cMMFEHtQ0Y4CPbiF0",
  authDomain: "food-delivery-2b6c7.firebaseapp.com",
  projectId: "food-delivery-2b6c7",
  storageBucket: "food-delivery-2b6c7.appspot.com",
  messagingSenderId: "246021270823",
  appId: "1:246021270823:web:3f75d2615bdbfafae40d02",
  measurementId: "G-WQM9HNB9KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const firestore = getFirestore(app);
export const dataBase = getFirestore(app);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();


