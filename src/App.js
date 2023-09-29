import "./App.css";
import { DashboardPage } from "./Dashboard";
import { Home } from "./Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div class="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
