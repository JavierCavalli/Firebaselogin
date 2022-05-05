// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYk5vcuTzXo5VhmIDCGWdPnsBgtQOgpVY",
  authDomain: "fir-auth-316b4.firebaseapp.com",
  projectId: "fir-auth-316b4",
  storageBucket: "fir-auth-316b4.appspot.com",
  messagingSenderId: "686186546478",
  appId: "1:686186546478:web:347fb179ebb7fa2fbe26bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app