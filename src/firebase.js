
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5L98GtfXzRVLEkgMLq3ECVKld58fyDvM",
    authDomain: "clone-front-end-ea256.firebaseapp.com",
    projectId: "clone-front-end-ea256",
    storageBucket: "clone-front-end-ea256.appspot.com",
    messagingSenderId: "626078399321",
    appId: "1:626078399321:web:20212903a7ceb66936aa48",
    measurementId: "G-07PKV9W3L6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
