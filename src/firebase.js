// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyC0efgGJ00VcaWggssaELFoDoGt4kJDCMU",
    authDomain: "insta-aa8e8.firebaseapp.com",
    databaseURL: "https://insta-aa8e8.firebaseio.com",
    projectId: "insta-aa8e8",
    storageBucket: "insta-aa8e8.appspot.com",
    messagingSenderId: "108126400747",
    appId: "1:108126400747:web:691aaec868f76485510eae",
    measurementId: "G-1GM5YB8823"

});

const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage= firebase.storage();

export {db, auth, storage};

