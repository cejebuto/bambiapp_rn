import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBH62BHC49DWsJ79616f3o1WEWuPbw06RA",
    authDomain: "chat-5739e.firebaseapp.com",
    projectId: "chat-5739e",
    storageBucket: "chat-5739e.appspot.com",
    messagingSenderId: "466321591694",
    appId: "1:466321591694:web:fc73f0aaee5b51db72a8df"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
