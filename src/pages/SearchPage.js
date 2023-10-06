import BookBlurb from "../components/BookBlurb";
import Header from "../components/Header";
import OptionsMenu from "../components/OptionsMenu";
import { useState } from "react";
const SearchPage = () => {
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");

  function submit(e) {
    e.preventDefault();
    console.log("title:", title);
    console.log("author:", author);
  }
  return (
    <div>
      <div>
        <Header />
        <OptionsMenu selected="search" />
      </div>
      <h1 class="page-title">Search</h1>
      <div class="subtitle">Books by Title and/or Author</div>
      <form>
        <label for="title">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label for="title">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <button onClick={submit}>Search</button>
      </form>
      <BookBlurb />
    </div>
  );
};

export default SearchPage;
