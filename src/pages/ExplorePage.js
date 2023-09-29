import Header from "../components/Header";

export const ExplorePage = () => {
  return (
    <div>
      <Header />
      <div class="nav-bar">
        <div class="nav-button nav-button-current">Explore</div>
        <div class="nav-button">Bookshelf</div>
        <div class="nav-button">Reading Log</div>
        <div class="nav-button">Vocabulary</div>
      </div>
    </div>
  );
};
