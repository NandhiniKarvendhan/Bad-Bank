// import firebase from "firebase/app";
// import "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
const firebaseConfig = {
  apiKey: "AIzaSyDVQ1yRYlrgXI-Cjs-KKZMbQQNr6UOi-_g",
  authDomain: "bad-bank-33001.firebaseapp.com",
  projectId: "bad-bank-33001",
  storageBucket: "bad-bank-33001.appspot.com",
  messagingSenderId: "901304639215",
  appId: "1:901304639215:web:2f1511b6f0d110de6a451a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// custom Hook
export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
