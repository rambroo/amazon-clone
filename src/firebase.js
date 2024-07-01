import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNZ65ECdLdI5rFPovi4AJjJKXuxOUJ1GM",
    authDomain: "clone-challenge-6187e.firebaseapp.com",
    projectId: "clone-challenge-6187e",
    storageBucket: "clone-challenge-6187e.appspot.com",
    messagingSenderId: "1080140881877",
    appId: "1:1080140881877:web:d1b6f158845457f65de75c",
    measurementId: "G-5J2G4YVKHC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth};