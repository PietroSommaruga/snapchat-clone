import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBVOWn3p7F-Jd-dwCKf5DGM7rZLTW6-mFY",
    authDomain: "snapchat-clone-1060e.firebaseapp.com",
    projectId: "snapchat-clone-1060e",
    storageBucket: "snapchat-clone-1060e.appspot.com",
    messagingSenderId: "923006136309",
    appId: "1:923006136309:web:95601299a35349c4727abc"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
