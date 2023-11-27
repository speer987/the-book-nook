import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Code from Web App blog
export function SignIn() {
  return (
    <div className="h-14 flex items-center bg-teal-700 rounded-full">
      <button
        className="px-5 font-body hover:font-bold"
        onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
      >
        Sign In With Google
      </button>
    </div>
  );
}

export function SignOut() {
  return (
    <div className="flex items-center bg-teal-700 rounded-full">
      <img
        className="h-12 rounded-full m-1"
        src={auth.currentUser?.photoURL}
      ></img>
      <div className="mx-4 px-1 pr-4 leading-5 flex flex-col">
        {auth.currentUser.displayName}
        <button class="font-body hover:font-bold" onClick={() => signOut(auth)}>
          Sign Out
        </button>
      </div>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
