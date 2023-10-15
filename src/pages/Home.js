import Header from "../components/Header";
import image from "../images/sign-up-page.jpg";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../Firebase";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div class="flex-container flex-row">
        <img id="front-img" src={image} alt="floating book"></img>
        <div id="form-container">
          <form id="form-centered" class="flex-container flex-column">
            <h1 class="centered-text">Sign In</h1>
            <label>Email</label>
            <input type="text" id="email" name="fname" />
            <label for="password">Password</label>
            <input type="password" id="password" name="fname" />
            <input
              id="submit-button"
              type="submit"
              value="Sign In"
              onClick={() => navigate("/search")}
            />
            <a href="#">Register for a Book Nook account!</a>
            <a href="#">Forgot Password?</a>
            <button type="button" onClick={signInWithGoogle}>
              Sign in With Google
            </button>
            {/* <p>Name: {localStorage.getItem("name")}</p>
            <p>Email: {localStorage.getItem("email")}</p>
            <p>Profile Pic: {localStorage.getItem("profile pic")}</p> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
