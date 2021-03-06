import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCuSu-pKw7ZVeJIx50v8mi-Lm0wTIvWez4",
    authDomain: "tinder-79d48.firebaseapp.com",
    projectId: "tinder-79d48",
    storageBucket: "tinder-79d48.appspot.com",
    messagingSenderId: "1001226004055",
    appId: "1:1001226004055:web:3f340c230bc443eb9ce512",
    measurementId: "G-QBJZDBWD34"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;