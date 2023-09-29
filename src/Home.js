import image from "./images/sign-up-page.jpg";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>The Book Nook</header>
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
              onClick={() => navigate("/dashboard")}
            />
            <a href="#">Register for a Book Nook account!</a>
            <a href="#">Forgot Password?</a>
          </form>
        </div>
      </div>
    </div>
  );
};
