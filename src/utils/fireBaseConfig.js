// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJHd_F1i_RU5bjtrGD4B6hmcLuxjS3S98",
  authDomain: "namae-react-coderhouse.firebaseapp.com",
  projectId: "namae-react-coderhouse",
  storageBucket: "namae-react-coderhouse.appspot.com",
  messagingSenderId: "766102067869",
  appId: "1:766102067869:web:441590cf360d506531d274"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;