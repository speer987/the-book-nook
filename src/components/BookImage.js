import { G_BOOKS_API_KEY } from "../apiKeys";
import BookInfo from "./BookInfo";
import { useState } from "react";
export default function BookImage({ bookInfo }) {
  let url = null;
  let data = null;
  const [bookData, setBookData] = useState("");

  function bookPopup(isbn) {
    url = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${G_BOOKS_API_KEY}`;
    let bookDataDict = {};
    let currentVolume,
      base,
      type_bool,
      type,
      maturity,
      rating,
      currency,
      listPrice,
      price = null;

    fetch(url)
      .then((response) => response?.json())
      .then((response_json) => {
        console.log(url);
        data = response_json?.items;
        console.log(data);
        currentVolume = data[0]?.volumeInfo;

        console.log(currentVolume);

        base = data?.saleInfo;
        type_bool = base?.isEbook;
        if (type_bool === true) {
          type = "E-Book Price";
        } else {
          type = "Print Price";
        }

        if (maturity === "NOT_MATURE") {
          maturity = "No";
        } else {
          maturity = "Yes";
        }

        rating = currentVolume?.averageRating;
        if (rating === undefined) {
          rating = "None";
        }

        currency = base?.listPrice?.currencyCode;
        if (data?.saleInfo?.saleability === "FOR_SALE" && currency === "USD") {
          listPrice = base?.listPrice?.amount?.toString();
          price = listPrice + " " + currency;
        } else {
          price = "N/A";
        }

        bookDataDict = {
          title: currentVolume?.title,
          image: currentVolume?.imageLinks?.thumbnail,
          authors: currentVolume?.authors?.toString(),
          desc: currentVolume?.description,
          maturity: maturity,
          published: currentVolume?.publishedDate,
          rating: rating,
          pages: currentVolume?.pageCount,
          preview: currentVolume?.previewLink,
          type: type,
          price: price,
          isbn: isbn,
        };
        setBookData(bookDataDict);
      })
      .catch((error) => setBookData(error));
  }

  function closePopup() {
    setBookData(null);
  }

  return (
    <>
      <img
        className="w-1/6 rounded-lg m-5 hover:scale-110 transition ease-in-out hover:shadow-lg shadow-teal-900"
        key={bookInfo?.book_image}
        src={bookInfo?.book_image}
        onClick={() => bookPopup(bookInfo?.primary_isbn10)}
      />
      {bookData && (
        <div
          className="z-10 fixed top-0 left-0 bg-teal-500 bg-opacity-75 h-screen w-screen flex flex-col items-center justify-center overscroll-contain"
          // onClick={() => closePopup()}
        >
          {console.log(bookData)}
          <BookInfo book={bookData} />
          <button
            className="bg-teal-900 rounded p-2 font-body text-slate-50 w-2/6 hover:bg-teal-700 duration-200 ease-in-out"
            onClick={() => closePopup()}
          >
            Close Popup
          </button>
        </div>
      )}
    </>
  );
}
