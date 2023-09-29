import Header from "../components/Header";
import OptionsMenu from "../components/OptionsMenu";
const ReadingLogPage = () => {
  return (
    <div>
      <div>
        <Header />
        <OptionsMenu selected="reading-log" />
      </div>
      <div>Reading Log Page</div>
    </div>
  );
};

export default ReadingLogPage;
