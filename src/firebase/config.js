import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDxSFbPBHu27ECJey56npIcwHTSHZGa9Jc",
  authDomain: "thedojo-a49d8.firebaseapp.com",
  projectId: "thedojo-a49d8",
  storageBucket: "thedojo-a49d8.appspot.com",
  messagingSenderId: "665535140000",
  appId: "1:665535140000:web:62014ed10484c8bdd839c5"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp


export {projectFirestore,projectAuth, timestamp}


