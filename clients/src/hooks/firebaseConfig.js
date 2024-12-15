// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsIFYCiKtBVcDjqUX4DA0wltUaDeS-59A",
  authDomain: "healthcareproject-28df6.firebaseapp.com",
  projectId: "healthcareproject-28df6",
  storageBucket: "healthcareproject-28df6.firebasestorage.app",
  messagingSenderId: "492774623635",
  appId: "1:492774623635:web:342d8627753bd314ef4066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Set up Firebase Auth Emulator for development


export { auth };
