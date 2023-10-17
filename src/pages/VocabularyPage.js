import Header from "../components/Header";
import CurrentPageWithInfo from "../components/CurrentPageWithInfo";
import TextInput from "../components/TextInput";
import SubmitVocabButton from "../components/SubmitVocabButton";
import { useState } from "react";
const VocabularyPage = () => {
  const [word, setWord] = useState("");
  const [data, setData] = useState("");
  return (
    <div>
      <Header />
      <div class="bg-gradient-to-b from-teal-100 text-lg p-7 pb-0">
        <CurrentPageWithInfo
          page="Vocabulary"
          info={"Search and Save Words to Learn"}
        />
      </div>
      <TextInput
        displayName="Word:"
        type="text"
        value="vocab"
        setter={setWord}
      />
      <SubmitVocabButton word={word} setData={setData} />
      {data && console.log(data)}
    </div>
  );
};

export default VocabularyPage;
