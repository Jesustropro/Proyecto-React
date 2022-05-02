// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const REACT_APP_APIKEY = process.env.REACT_APP_APIKEY;
const REACT_APP_PROJECTID = process.env.REACT_APP_PROJECTID;
const REACT_APP_AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const REACT_APP_STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET;
const REACT_APP_MESSAGINSENDERID = process.env.REACT_APP_MESSAGINSENDERID;
const REACT_APP_APPID = process.env.REACT_APP_APPID;
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: REACT_APP_AUTHDOMAIN,
  projectId: REACT_APP_PROJECTID,
  storageBucket: REACT_APP_STORAGEBUCKET,
  messagingSenderId: REACT_APP_MESSAGINSENDERID,
  appId: REACT_APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
