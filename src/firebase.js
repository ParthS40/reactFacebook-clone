// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAhFo_PgEG8qrh0M_IAgpiLenEJrTxLHFs",
    authDomain: "fb-clone-92546.firebaseapp.com",
    projectId: "fb-clone-92546",
    storageBucket: "fb-clone-92546.appspot.com",
    messagingSenderId: "917183854510",
    appId: "1:917183854510:web:3a13dcbf53001ff905fa3f",
    measurementId: "G-RR0F6K1B8F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;