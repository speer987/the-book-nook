import Header from "../components/Header";
// import image from "../images/sign-up-page.jpg";
import google_logo from "../images/google.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../services/AuthServices";
import { Link } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-home w-screen h-screen bg-cover flex flex-col items-center justify-center">
      <div className="w-1/3 h-1/5 bg-teal-900 rounded-t-xl flex flex-col items-center justify-center text-slate-50">
        <div className="font-title text-3xl font-semibold">The Book Nook</div>
        <div className="font-title text-lg">Find Your Next Good Book</div>
      </div>
      <div className="w-1/3 h-2/5 bg-white border-2 border-teal-900 rounded-b-xl flex flex-col items-center justify-center">
        <Link
          class="bg-teal-200 active:bg-teal-100 focus:text-teal-900 rounded-lg hover:bg-teal-800 hover:text-slate-50 transition duration-500 ease-in-out font-body p-4"
          to={"../explore"}
        >
          Explore Trending Books
        </Link>
        <Link
          class="bg-teal-200 active:bg-teal-100 focus:text-teal-900 rounded-lg hover:bg-teal-800 hover:text-slate-50 transition duration-500 ease-in-out font-body p-4"
          to={"../search"}
        >
          Search for A Book
        </Link>
        <Link
          class="bg-teal-200 active:bg-teal-100 focus:text-teal-900 rounded-lg hover:bg-teal-800 hover:text-slate-50 transition duration-500 ease-in-out font-body p-4"
          to={"../bookshelf"}
        >
          Maintain Your Virtual Bookshelf
        </Link>
      </div>
    </div>
  );
};

export default Home;
