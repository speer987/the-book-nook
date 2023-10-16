import BookBlurb from "../components/BookBlurb";
import Header from "../components/Header";
import CurrentPageWithInfo from "../components/CurrentPageWithInfo";
import { useState } from "react";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
const SearchPage = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [data, setData] = useState();

  return (
    <div>
      <Header loggedIn={true} />
      <div class="bg-gradient-to-b from-teal-100 text-lg p-7 pb-3">
        <CurrentPageWithInfo
          page="Search"
          info={"Books by Title and/or Author"}
        />
      </div>
      <TextInput
        displayName="Title"
        type="text"
        value="title"
        setter={setTitle}
      />
      <TextInput
        displayName="Author"
        type="text"
        value={author}
        setter={setAuthor}
      />
      <SubmitButton title={title} author={author} setData={setData} />
      {data && <BookBlurb data={data} />}
    </div>
  );
};

export default SearchPage;
