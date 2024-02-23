// Import the functions you need from the SDKs you need
// 右はダメ　import { initializeApp,getFirestore } from "firebase/app";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmDtjrpNM6H2YEhsc_TXpEBhlgkVLE36g",
  authDomain: "questionnaireapp-2462e.firebaseapp.com",
  projectId: "questionnaireapp-2462e",
  storageBucket: "questionnaireapp-2462e.appspot.com",
  messagingSenderId: "847834652863",
  appId: "1:847834652863:web:cd72db5e49569bc2fd660a"
  
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)

export default db;



