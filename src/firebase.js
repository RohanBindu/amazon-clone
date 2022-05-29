// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPgx4OxIA_Jmk9S1ZApNn1u_ka1NiWga8",
  authDomain: "clone-6da2a.firebaseapp.com",
  projectId: "clone-6da2a",
  storageBucket: "clone-6da2a.appspot.com",
  messagingSenderId: "584294465589",
  appId: "1:584294465589:web:8de93e931dc3e5ca3ff17c",
  measurementId: "G-7YW731QJ21",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
