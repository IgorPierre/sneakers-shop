// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeEWBRNZe-l4ETKXHhRte2ObcLVDc7130",
  authDomain: "sneakers-shop-2b4f6.firebaseapp.com",
  projectId: "sneakers-shop-2b4f6",
  storageBucket: "sneakers-shop-2b4f6.appspot.com",
  messagingSenderId: "535797832625",
  appId: "1:535797832625:web:6b2a3369b94e092c60bb90",
  measurementId: "G-R7MSYZYET9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);