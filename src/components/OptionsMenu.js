import { useNavigate } from "react-router-dom";
import "../App.css";
export default function OptionsMenu(selected) {
  const navigate = useNavigate();
  const navExplore = (
    <div className="nav-button" onClick={() => navigate("/explore")}>
      Explore
    </div>
  );
  const navBookshelf = (
    <div className="nav-button" onClick={() => navigate("/bookshelf")}>
      Bookshelf
    </div>
  );
  const navReadingLog = (
    <div className="nav-button" onClick={() => navigate("/reading-log")}>
      Reading Log
    </div>
  );
  const navVocabulary = (
    <div className="nav-button" onClick={() => navigate("/vocabulary")}>
      Vocabulary
    </div>
  );
  const navSearch = (
    <div className="nav-button" onClick={() => navigate("/search")}>
      Search
    </div>
  );

  let currentLine = "";
  if (selected === "explore") {
    currentLine = <div className="nav-button nav-button-current">Explore</div>;
    return (
      <div className="nav-bar">
        {currentLine}
        {navSearch}
        {navBookshelf}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  } else if (selected === "bookshelf") {
    currentLine = (
      <div className="nav-button nav-button-current"> Bookshelf </div>
    );
    return (
      <div className="nav-bar">
        {navExplore}
        {navSearch}
        {currentLine}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  } else if (selected === "reading-log") {
    currentLine = (
      <div className="nav-button nav-button-current"> Reading Log </div>
    );
    return (
      <div className="nav-bar">
        {navExplore}
        {navSearch}
        {navBookshelf}
        {currentLine}
        {navVocabulary}
      </div>
    );
  } else if (selected === "vocabulary") {
    currentLine = (
      <div className="nav-button nav-button-current"> Vocabulary </div>
    );
    return (
      <div className="nav-bar">
        {navExplore}
        {navSearch}
        {navBookshelf}
        {navReadingLog}
        {currentLine}
      </div>
    );
  } else if (selected === "search") {
    currentLine = <div className="nav-button nav-button-current">Search</div>;
    return (
      <div className="nav-bar">
        {navExplore}
        {currentLine}
        {navBookshelf}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  } else {
    currentLine = <div className="nav-button nav-button-current">Explore</div>;
    return (
      <div className="nav-bar">
        {currentLine}
        {navSearch}
        {navBookshelf}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  }
}
