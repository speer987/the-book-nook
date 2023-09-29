import "./App.css";
import { ExplorePage } from "./pages/ExplorePage";
import { Home } from "./pages/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<ExplorePage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
