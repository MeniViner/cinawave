// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi6jvUU2n_6BOdUaZCaqZvsC4LXFWNU9s",
  authDomain: "cina-wave.firebaseapp.com",
  databaseURL: "https://cina-wave-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cina-wave",
  storageBucket: "cina-wave.appspot.com",
  messagingSenderId: "708393648821",
  appId: "1:708393648821:web:75547eaee3920e519974fc",
  measurementId: "G-C9H745DHN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
