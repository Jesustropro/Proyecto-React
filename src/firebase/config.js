// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const enviroment = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINSENDERID,
  appId: process.env.APPID,
};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: enviroment.apiKey,
  authDomain: enviroment.authDomain,
  projectId: enviroment.projectId,
  storageBucket: enviroment.storageBucket,
  messagingSenderId: enviroment.messagingSenderId,
  appId: enviroment.appId,
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
