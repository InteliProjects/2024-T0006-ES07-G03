import { initializeApp } from "firebase/app";
import { initializeFirestore, serverTimestamp } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxs0H0fEUfigRIGqkapdJ9UkoBDPKjk4Y",
  authDomain: "frevo-23d08.firebaseapp.com",
  projectId: "frevo-23d08",
  storageBucket: "frevo-23d08.appspot.com",
  messagingSenderId: "121321592123",
  appId: "1:121321592123:web:d4a1301b1ecef3631c931e",
  measurementId: "G-622PXHWJ18"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = initializeFirestore(firebaseApp, {
  ignoreUndefinedProperties: true,
});
const auth = getAuth(firebaseApp);

const timestamp = serverTimestamp();
const googleProvider = new GoogleAuthProvider();


export { db, auth, timestamp, googleProvider};

