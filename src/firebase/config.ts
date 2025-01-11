// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1-bLZu6ZCXG7nUehZBdx8YgVPP0eY0Ow",
    authDomain: "astro-authentication-881b4.firebaseapp.com",
    projectId: "astro-authentication-881b4",
    storageBucket: "astro-authentication-881b4.firebasestorage.app",
    messagingSenderId: "104203674188",
    appId: "1:104203674188:web:75b93ceb5b5283d831cae9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
auth.languageCode = 'es';

export const firebase = {
    app,
    auth
}