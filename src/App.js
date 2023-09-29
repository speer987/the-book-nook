import './App.css';
import image from './images/sign-up-page.jpg'
import {useState, useEffect} from "react"

function App() {
  // const [data, setData] = useState("")

  // useEffect(() => {
  //   const url = `https://crossorigin.me/https://api.hamatim.com/quote`;
  //   console.log(url);
  //   fetch(url)
  //     .then((r) => r.json())
  //     .then((r) => setData(r))
  //     .catch((e) => setData(e));
  //   }, []);

  //   // const author = data?.author
  //   console.log(data)
  //   // console.log(author)
  return (
    <div class="App">
      <header>The Book Nook</header>
      <div class="flex-container flex-row">
        <img id="front-img" src={image} alt="floating book"></img>
        <div id="form-container">
          <form id="form-centered" class="flex-container flex-column">
            <h1 class="centered-text">Sign In</h1>
            <label>Email</label>
            <input type="text" id="email" name="fname"/>
            <label for="password">Password</label>
            <input type="password" id="password" name="fname"/>
            <input id="submit-button" type="submit" value="Sign In"/>
            <a href="#">Register for a Book Nook account!</a>
            <a href="#">Forgot Password?</a>
          </form> 
        </div>
      </div>
    </div>
  );
}

export default App;
