// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log("environment" , import.meta.env.VITE_APIKEY)
const firebaseConfig = {
  apiKey: "AIzaSyDusL2U0JvsPt7Jr4juEhzhcVR0Ynz9bkA",
  authDomain: "the-news-dragon-a7a41.firebaseapp.com",
  projectId: "the-news-dragon-a7a41",
  storageBucket: "the-news-dragon-a7a41.appspot.com",
  messagingSenderId: "754709996753",
  appId: "1:754709996753:web:c9004e245f8f24133d11f0"
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;