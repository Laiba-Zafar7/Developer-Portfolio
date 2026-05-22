// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSubqKi-x22M-tgf8-CT0HefgNDKej1oM",
  authDomain: "laiba-portfolio-a2691.firebaseapp.com",
  projectId: "laiba-portfolio-a2691",
  storageBucket: "laiba-portfolio-a2691.firebasestorage.app",
  messagingSenderId: "473320395432",
  appId: "1:473320395432:web:c7d1a72dd10295a4b8e89d",
  measurementId: "G-TMPZKT0DGN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);