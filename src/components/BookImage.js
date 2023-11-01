import { G_BOOKS_API_KEY } from "../apiKeys";
import BookInfo from "./BookInfo";
import { useState } from "react";
export default function BookImage({ bookInfo }) {
  let url = null;
  let data = null;
  const [bookData, setBookData] = useState("");
  const [bookDict, setBookDict] = useState("");

  // let currentVolume,
  //   title,
  //   image,
  //   authors,
  //   desc,
  //   maturity,
  //   published,
  //   rating,
  //   price,
  //   pages,
  //   preview,
  //   currency,
  //   listPrice,
  //   base,
  //   type,
  //   type_bool = null;

  // let bookArray = [];
  // let currentDict = {};

  // data?.map((book) => {
  //   title = currentVolume?.title;
  //   image = currentVolume?.imageLinks?.thumbnail;
  //   authors = currentVolume?.authors;
  //   desc = currentVolume?.description;
  //   maturity = currentVolume?.maturityRating;
  //   published = currentVolume?.publishedDate;
  //   rating = currentVolume?.averageRating;
  //   pages = currentVolume?.pageCount;
  //   preview = currentVolume?.previewLink;

  //   base = book?.saleInfo;
  //   type_bool = base?.isEbook;
  //   if (type_bool === true) {
  //     type = "E-Book Price";
  //   } else {
  //     type = "Print Price";
  //   }

  //   if (maturity === "NOT_MATURE") {
  //     maturity = "Not Mature";
  //   } else {
  //     maturity = "Mature";
  //   }

  //   if (rating === undefined) {
  //     rating = "None";
  //   }

  //   currency = base?.listPrice?.currencyCode;
  //   if (book?.saleInfo?.saleability === "FOR_SALE" && currency === "USD") {
  //     listPrice = base?.listPrice?.amount?.toString();
  //     price = listPrice + " " + currency;
  //   } else {
  //     price = "N/A";
  //   }

  //   currentDict = {
  //     title: title,
  //     authors: authors,
  //     image: image,
  //     desc: desc,
  //     maturity: maturity,
  //     published: published,
  //     rating: rating,
  //     pages: pages,
  //     preview: preview,
  //     price: price,
  //     type: type,
  //   };

  //   bookArray.push(currentDict);
  // });

  function bookPopup(isbn) {
    url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${G_BOOKS_API_KEY}`;

    fetch(url)
      .then((response) => response?.json())
      .then((response_json) => {
        data = response_json?.items;
        setBookData(data);
        console.log(bookData);
        // currentVolume = bookData?.volumeInfo;
        // setBookDict([{}]);
      })
      .catch((error) => setBookData(error));
  }

  function closePopup() {
    setBookData(null);
  }

  return (
    <>
      <img
        class="w-1/6 rounded-lg m-5 hover:scale-110 transition ease-in-out hover:shadow-lg shadow-teal-900"
        key={bookInfo?.book_image}
        src={bookInfo?.book_image}
        onClick={() => bookPopup(bookInfo?.primary_isbn10)}
      />
      {bookData && (
        <div className="z-10 fixed top-0 left-0 bg-teal-500 bg-opacity-75 h-screen w-screen flex flex-col items-center justify-center overscroll-contain">
          <BookInfo book={bookData} />
          <button
            className="bg-teal-900 rounded-lg p-2 font-body text-slate-50 w-2/6 hover:bg-teal-700"
            onClick={() => closePopup()}
          >
            Close Popup
          </button>
        </div>
      )}
    </>
  );
}
