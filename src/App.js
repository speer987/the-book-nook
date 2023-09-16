import './App.css';
import image from './images/sign-up-page.jpg'

function App() {
  return (
    <div className="App">
      <div class="float-container">
        <header>The Book Nook</header>
          <div class='flex-box'>
            <img class="float-child flex-child" src={image} alt="floating book" height='100px'></img>
            <div class="float-child sign-up">
            <form className="flex-form">
              <h1 className="centered-text">Sign In</h1>
              <label for="email">Email</label>
              <input type="text" id="email" name="fname"/>
              <label for="password">Password</label>
              <input type="password" id="password" name="fname"/>
              <input id="submit-button" type="submit" value="Sign In"/>
              <div id="user-links">
                {/* <p>New user? Register <a href="#">here.</a></p>
                <p>Forgot Password? Reset <a href="#">here.</a></p> */}
              </div>
            </form>
            <div id="book-quote">
              “The books [poetry collections] may not sell, but neither are they given away or thrown away. They tend, more than other books, to fall apart in their owners’ hands. Not I suppose good news in a culture and economy built on obsolescence. But for a book to be loved this way and turned to this way for consolation and intense renewable excitement seems to me a marvel.”
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
