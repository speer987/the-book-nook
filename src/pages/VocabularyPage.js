import Header from "../components/Header";
import OptionsMenu from "../components/OptionsMenu";
const VocabularyPage = () => {
  return (
    <div>
      <div>
        <Header />
        <OptionsMenu selected="vocabulary" />
      </div>
      <div>Vocab Page</div>
    </div>
  );
};

export default VocabularyPage;
