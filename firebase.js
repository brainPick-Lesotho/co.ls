// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdDyCiJ7flRZh2jbaYo5q4Hpjpou-rHAc",
  authDomain: "brainpicklesotho-ef66c.firebaseapp.com",
  projectId: "brainpicklesotho-ef66c",
  storageBucket: "brainpicklesotho-ef66c.appspot.com", // fixed here
  messagingSenderId: "273452901797",
  appId: "1:273452901797:web:edfbc18ee4043c3931f44c",
  measurementId: "G-CXYY42FTEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export for use in other files
export { auth, db, analytics };
