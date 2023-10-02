import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
// import { ReadingLogPage } from "./ReadingLogPage";
import OptionsMenu from "../components/OptionsMenu";
import { useState, useEffect } from "react";

const ExplorePage = () => {
  const [currentBest, setCurrentBest] = useState("");
  const [categoryList, setCategoryList] = useState("");
  const apiKey = `LrgMgEJkKjWGZ5zXLBAd3voRBfD2s6aD`;
  let url = "";

  let dummyList = ["Hardcover Fiction"];

  // useEffect(() => {
  //   url =
  //     `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=` + apiKey;
  //   console.log(url);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => setCategoryList(response))
  //     .catch((error) => setCategoryList(error));
  // }, []);

  // const categoryInfo = categoryList?.results;
  // const categories = categoryInfo
  //   ?.slice(0, 10)
  //   ?.map((category) => category.list_name);
  // console.log(categories);

  // const urlList = categories?.map(
  //   (category) =>
  //     `https://api.nytimes.com/svc/books/v3/lists/current/` +
  //     category +
  //     `.json?api-key=` +
  //     apiKey
  // );
  // console.log(urlList?.[0]);

  // useEffect(() => {
  //   url = urlList?.[0];
  //   console.log(url);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => setCurrentBest(response))
  //     .catch((error) => setCurrentBest(error));
  // }, []);

  // console.log(currentBest);

  // const bookCategoryDataList = urlList.map();
  // useEffect(() => {
  //   const url =
  //     `https://api.nytimes.com/svc/books/v3/lists/current/paperback-nonfiction.json?api-key=` +
  //     apiKey;
  //   console.log(url);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => setCurrentBest(response))
  //     .catch((error) => setCurrentBest(error));
  // }, []);

  // console.log(currentBest);

  useEffect(() => {
    const url =
      `https://api.nytimes.com/svc/books/v3/lists/current/${dummyList}.json?api-key=` +
      apiKey;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((response) => setCurrentBest(response))
      .catch((error) => setCurrentBest(error));
  }, []);
  const bookList = currentBest?.results?.books;
  // console.log(currentBest?.results?.books?.[0]?.book_image);

  return (
    <div>
      <Header />
      <OptionsMenu selected="explore" />
      <h1 class="page-title">Explore</h1>
      <div class="subtitle">New York Time's Best Selling Books This Week</div>
      {/* <label for="genre">Genre:</label> */}
      {/* <Dropdown list={categories} purpose="Genre" /> */}
      <Dropdown list={dummyList} purpose="Genre" />
      <div class="flex-container flex-row covers-container">
        {bookList?.map((bookInfo) => (
          <img class="book-cover" key={bookInfo} src={bookInfo?.book_image} />
        ))}
      </div>
      <div>Search</div>
      <div></div>
    </div>
  );
};

export default ExplorePage;
