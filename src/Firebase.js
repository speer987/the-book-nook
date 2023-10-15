// Adding sign in authentication from firebase with helpful youtube video: https://www.youtube.com/watch?v=vDT7EnUpEoo

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6FFfnPURy5siVQEDAqKc8n4Ab-8blPvQ",
  authDomain: "the-book-nook-5c098.firebaseapp.com",
  projectId: "the-book-nook-5c098",
  storageBucket: "the-book-nook-5c098.appspot.com",
  messagingSenderId: "664170601227",
  appId: "1:664170601227:web:0cb0d264003ab5545b600e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.name;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profile pic", profilePic);
    })
    .catch((error) => console.log(error));
};
