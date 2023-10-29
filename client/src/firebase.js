// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mert-auth-48a54.firebaseapp.com",
    projectId: "mert-auth-48a54",
    storageBucket: "mert-auth-48a54.appspot.com",
    messagingSenderId: "673477631794",
    appId: "1:673477631794:web:28822ff09806a2bb9f412b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);