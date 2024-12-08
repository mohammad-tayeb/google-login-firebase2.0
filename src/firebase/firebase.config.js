// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0zefOgSmR2Em9F83znuUiTmDf9CH3Fkc",
  authDomain: "email-password-auth2-1238b.firebaseapp.com",
  projectId: "email-password-auth2-1238b",
  storageBucket: "email-password-auth2-1238b.firebasestorage.app",
  messagingSenderId: "865330408681",
  appId: "1:865330408681:web:4b851c60d69839ad621478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
