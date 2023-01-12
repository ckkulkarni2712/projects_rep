import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD94J0TDvsHLDpKzD6tWOTdXGjM78ds-rQ",
  authDomain: "whatsapp-clone-f9c1c.firebaseapp.com",
  projectId: "whatsapp-clone-f9c1c",
  storageBucket: "whatsapp-clone-f9c1c.appspot.com",
  messagingSenderId: "40868591510",
  appId: "1:40868591510:web:b78954965f28bd942b0fb7",
  measurementId: "G-E0MTEGBZ6D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;