import BookBlurb from "../components/BookBlurb";
import Header from "../components/Header";
import OptionsMenu from "../components/OptionsMenu";
import { useState, useEffect } from "react";
const SearchPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [results, setResults] = useState(null);

  function submit(event) {
    event.preventDefault();
    console.log(title);
    // let base_url = `https://www.googleapis.com/books/v1/volumes`;
    // if (title.length === 0) {
    //   console.log("Please enter a title");
    // } else if (title.length > 0) {
    //   base_url = base_url.concat(`?q=${title}`);
    // } else if (author.length > 0) {
    //   base_url = base_url.concat(`?q=${author}`);
    // }

    // // console.log(base_url);
    // fetch(base_url)
    //   .then((response) => response.json())
    //   .then((response) => setResults(response))
    //   .catch((e) => setResults(e));
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
        <input type="text" onChange={(event) => setTitle(event)} />
        {console.log(title)}
        <br />
        <label for="title">Author</label>
        <input type="text" onChange={(event) => setAuthor(event)} />
        {console.log(author)}
        <button onClick={submit}>Search</button>
      </form>
      <BookBlurb />
    </div>
  );
};

export default SearchPage;
