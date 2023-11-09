import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCdK9sIkWCotVnuuLT_qw-e8E6G8bAGxRM",
  authDomain: "project-mgt-site.firebaseapp.com",
  projectId: "project-mgt-site",
  storageBucket: "project-mgt-site.appspot.com",
  messagingSenderId: "702193036549",
  appId: "1:702193036549:web:def22ddb3cab6aab261b6c"
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

const timestamp = firebase.firestore.Timestamp


export {projectFirestore,projectAuth, timestamp}


