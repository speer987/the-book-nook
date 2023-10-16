import { G_BOOKS_API_KEY } from "../apiKeys";
import BookBlurb from "./BookBlurb";
import { useState } from "react";
export default function BookImage({ bookInfo }) {
  let url = null;
  const [bookData, setBookData] = useState("");
  function bookPopup(isbn) {
    url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${G_BOOKS_API_KEY}`;

    fetch(url)
      .then((response) => response?.json())
      .then((response_json) => {
        console.log(response_json?.items);
        setBookData(response_json?.items);
      })
      .catch((error) => setBookData(error));
  }

  return (
    // <>
    <img
      class="w-1/6 rounded-lg m-5 hover:scale-110 transition ease-in-out hover:shadow-lg shadow-teal-900"
      key={bookInfo?.book_image}
      src={bookInfo?.book_image}
      onClick={() => bookPopup(bookInfo?.primary_isbn10)}
    />
    // {/* <div class="z-10 fixed top-24 left-0 h-full w-full">
    // {bookData && <BookBlurb data={bookData} />}
    // </div> */}
    // {/* </> */}
  );
}
