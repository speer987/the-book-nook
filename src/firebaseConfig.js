// Adding sign in authentication from firebase with helpful youtube video: https://www.youtube.com/watch?v=vDT7EnUpEoo

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD6FFfnPURy5siVQEDAqKc8n4Ab-8blPvQ",
  authDomain: "the-book-nook-5c098.firebaseapp.com",
  projectId: "the-book-nook-5c098",
  storageBucket: "the-book-nook-5c098.appspot.com",
  messagingSenderId: "664170601227",
  appId: "1:664170601227:web:0cb0d264003ab5545b600e",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore();
export const books = collection(db, "books");
// export const reading_collection = collection(db, "currently-reading");
// export const to_read_collection = collection(db, "want-to-read");
