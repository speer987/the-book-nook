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
              <p id="new-user-text">New user? Register here.</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
