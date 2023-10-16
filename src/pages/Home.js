import Header from "../components/Header";
// import image from "../images/sign-up-page.jpg";
import google_logo from "../images/google.png";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";
import { useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  function handleClick() {
    signInWithGoogle();
    navigate("/explore");
  }
  return (
    <div className="bg-home w-screen h-screen bg-cover flex flex-col items-center justify-center">
      <div className="w-1/3 h-1/5 bg-teal-900 rounded-t-xl flex flex-col items-center justify-center text-slate-50">
        <div className="font-title text-3xl font-semibold">The Book Nook</div>
        <div className="font-title text-lg">Find Your Next Good Book</div>
      </div>
      <div className="w-1/3 h-2/5 bg-white border-2 border-teal-900 rounded-b-xl flex flex-col items-center justify-center">
        <div className="font-body text-lg">Sign In With Google</div>
        <button type="button" onClick={handleClick}>
          <img
            className="w-24 h-24 m-5 p-5 rounded bg-slate-50 hover:bg-teal-100 transition ease-in-out"
            src={google_logo}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Home;
