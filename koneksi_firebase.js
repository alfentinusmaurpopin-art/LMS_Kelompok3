// koneksi_firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDCb9_WalvpE7hpENangBT6YRqQF9QiSOY",
    authDomain: "kelompok3-lms.firebaseapp.com",
    projectId: "kelompok3-lms",
    storageBucket: "kelompok3-lms.firebasestorage.app",
    messagingSenderId: "760627950615",
    appId: "1:760627950615:web:ebba88c3f9b3cc6f059852",
    measurementId: "G-DS21P4WNY2"
  };  

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);