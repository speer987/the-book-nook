import "./App.css";
import ExplorePage from "./pages/ExplorePage";
import Home from "./pages/Home";
import BookshelfPage from "./pages/BookshelfPage";
import ReadingLogPage from "./pages/ReadingLogPage";
import SearchPage from "./pages/SearchPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/bookshelf" element={<BookshelfPage />} />
            {/* <Route path="/reading-log" element={<ReadingLogPage />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
