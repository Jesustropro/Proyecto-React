// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const APIKEY = process.env.APIKEY;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: "proyecto-react-532f3.firebaseapp.com",
  projectId: "proyecto-react-532f3",
  storageBucket: "proyecto-react-532f3.appspot.com",
  messagingSenderId: "504438247304",
  appId: "1:504438247304:web:4509da58e05d9852aef43d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
