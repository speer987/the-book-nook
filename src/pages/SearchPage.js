import BookBlurb from "../components/BookBlurb";
import Header from "../components/Header";
import OptionsMenu from "../components/OptionsMenu";
import { useState } from "react";
import TextInput from "../components/TextInput";
import SubmitButton from "../components/SubmitButton";
const SearchPage = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [data, setData] = useState();

  return (
    <div>
      <div>
        <Header />
        <OptionsMenu selected="search" />
      </div>
      <h1 className="page-title">Search</h1>
      <div className="subtitle">Books by Title and/or Author</div>
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
      {/* {data.} */}
      <BookBlurb data={data} />
    </div>
  );
};

export default SearchPage;
