import { useNavigate } from "react-router-dom";
import "../App.css";
export default function OptionsMenu(selected) {
  const navigate = useNavigate();
  const navExplore = (
    <div class="nav-button" onClick={() => navigate("/explore")}>
      Explore
    </div>
  );
  const navBookshelf = (
    <div class="nav-button" onClick={() => navigate("/bookshelf")}>
      Bookshelf
    </div>
  );
  const navReadingLog = (
    <div class="nav-button" onClick={() => navigate("/reading-log")}>
      Reading Log
    </div>
  );
  const navVocabulary = (
    <div class="nav-button" onClick={() => navigate("/vocabulary")}>
      Vocabulary
    </div>
  );

  let currentLine = "";
  if (selected === "explore") {
    currentLine = <div class="nav-button nav-button-current">Explore</div>;
    return (
      <div class="nav-bar">
        {currentLine}
        {navBookshelf}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  } else if (selected === "bookshelf") {
    currentLine = <div class="nav-button nav-button-current"> Bookshelf </div>;
    return (
      <div class="nav-bar">
        {navExplore}
        {currentLine}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  } else if (selected === "reading-log") {
    currentLine = (
      <div class="nav-button nav-button-current"> Reading Log </div>
    );
    return (
      <div class="nav-bar">
        {navExplore}
        {navBookshelf}
        {currentLine}
        {navVocabulary}
      </div>
    );
  } else if (selected === "vocabulary") {
    currentLine = <div class="nav-button nav-button-current"> Vocabulary </div>;
    return (
      <div class="nav-bar">
        {navExplore}
        {navBookshelf}
        {navReadingLog}
        {currentLine}
      </div>
    );
  } else {
    currentLine = <div class="nav-button nav-button-current">Explore</div>;
    return (
      <div class="nav-bar">
        {currentLine}
        {navBookshelf}
        {navReadingLog}
        {navVocabulary}
      </div>
    );
  }
}
