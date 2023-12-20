import { getApp, getAuth, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfGaLpWGSi5ssokKk7Ncws2Sy3ZWEviRk",
  authDomain: "restaurant-app-e1ecc.firebaseapp.com",
  databaseURL: "https://restaurant-app-e1ecc-default-rtdb.firebaseio.com",
  projectId: "restaurant-app-e1ecc",
  storageBucket: "restaurant-app-e1ecc.appspot.com",
  messagingSenderId: "378369553530",
  appId: "1:378369553530:web:1e17e48a3e3917d6f377c3",
};

// Initialize Firebase
const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const fireStore = getFirestore(app);

const storage = getStorage(app);

export { app, fireStore, storage };
