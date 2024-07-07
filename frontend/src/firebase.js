import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC1X4Hj3qD3iS4CKS0jr1x_jR-LoU5ljII",
  authDomain: "blogwebsite-271ae.firebaseapp.com",
  projectId: "blogwebsite-271ae",
  storageBucket: "blogwebsite-271ae.appspot.com",
  messagingSenderId: "690066413869",
  appId: "1:690066413869:web:3746ccc54c8f103ee59ba4",
  measurementId: "G-QNVJ228507"
};



const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, analytics, auth, provider, signInWithPopup, signInWithRedirect, getRedirectResult, onAuthStateChanged };