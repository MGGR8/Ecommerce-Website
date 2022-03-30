// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBBbLWm-xZbRbhk0LZCUGoPJMVTkuybqSI",
    authDomain: "ecommerce-3ef1f.firebaseapp.com",
    projectId: "ecommerce-3ef1f",
    storageBucket: "ecommerce-3ef1f.appspot.com",
    messagingSenderId: "969995655932",
    appId: "1:969995655932:web:37546ece99f00561759579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
export default fireDB;