import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAv1LwHNGH2-Hn3Ny6lczSD-28amxkzKEg",
  authDomain: "pm-site-5a40f.firebaseapp.com",
  projectId: "pm-site-5a40f",
  storageBucket: "pm-site-5a40f.appspot.com",
  messagingSenderId: "319596906272",
  appId: "1:319596906272:web:b2f5006047da410f753945"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp


export {projectFirestore,projectAuth, projectStorage,timestamp}


