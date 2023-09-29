import Header from "../components/Header";
// import { ReadingLogPage } from "./ReadingLogPage";
import OptionsMenu from "../components/OptionsMenu";

const ExplorePage = () => {
  return (
    <div>
      <Header />
      <OptionsMenu selected="explore" />
      <h1 class="page-title">Explore</h1>
      <div>Best Selling Books</div>
    </div>
  );
};

export default ExplorePage;
