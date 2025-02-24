import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBxygdCo_ZRcbf8uxpkokdwmtXVQXYK76w",
    authDomain: "fb-react-native-f4982.firebaseapp.com",
    projectId: "fb-react-native-f4982",
    storageBucket: "fb-react-native-f4982.firebasestorage.app",
    messagingSenderId: "338389668511",
    appId: "1:338389668511:web:a48a98c5021441080488aa"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
