// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXiHdmlrE9bckq70KhgsIoazy3e61fceY",
  authDomain: "react-context-b60c3.firebaseapp.com",
  projectId: "react-context-b60c3",
  storageBucket: "react-context-b60c3.firebasestorage.app",
  messagingSenderId: "473006096552",
  appId: "1:473006096552:web:72340c66c8e2c060ebc29d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);