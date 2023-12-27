// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-stack-developer-project.firebaseapp.com",
  projectId: "mern-stack-developer-project",
  storageBucket: "mern-stack-developer-project.appspot.com",
  messagingSenderId: "1077239377451",
  appId: "1:1077239377451:web:860d2cc66d7ff730a9046e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
