import { db } from "../firebaseConfig";
import { setDoc, doc } from "firebase/firestore";
import { useAuthentication } from "../services/AuthServices";
import "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
export default function BookInfo({ book }) {
  const user = useAuthentication();
  let value,
    title,
    authors,
    image = null;

  let isbn = book?.isbn;

  let [pages, setPages] = useState(null);

  //  https://bobbyhadz.com/blog/react-select-onchange and used a bit of ChatGPT to figure this out.

  const handleChange = (event, book, pages) => {
    value = event.target.value;
    isbn = book?.isbn;
    title = book?.title;
    authors = book?.authors;
    image = book?.image;

    setDoc(doc(db, "books", isbn), {
      state: value,
      title: title,
      authors: authors,
      image: image,
      pages: pages,
    });
  };

  // Inspired by the code I submitted a couple of semester ago from my web app dev class for a hw assignment.
  function fetchPageCountData() {
    if (book?.pages === undefined || book?.pages === 0) {
      console.log(book?.title);
      // console.log(isbn);
      let currentBookURL = `https://openlibrary.org/isbn/${book?.isbn}.json`;
      fetch(currentBookURL)
        .then((response) => response.json())
        .then((response_json) => {
          if (
            response_json.number_of_pages === 0 ||
            response_json.number_of_pages === undefined
          ) {
            setPages("N/A");
          } else {
            setPages(response_json.number_of_pages);
          }
        })
        .catch((error) => setPages("N/A"));
    } else {
      if (book?.pages === 0) {
        setPages("N/A");
      } else {
        setPages(book?.pages);
      }
    }

    if (book?.pages === undefined) {
      setPages("N/A");
    }
  }

  useEffect(fetchPageCountData, [book]);

  if (!user) {
    console.log(book);
    return (
      <div class="flex w-6/12">
        <div class="border-solid border-1 border-slate-50 flex rounded-xl p-3 m-5 bg-white shadow-lg">
          <div class="basis-2/6">
            <img src={book?.image} class="w-44 m-5 mb-1 rounded" />
            <a href={book?.preview} target="_blank" class="m-0 p-0">
              <button class="h-8 font-body rounded w-44 mt-0 m-5 mb-1 bg-teal-900 hover:bg-teal-700 text-slate-50 text-base duration-200 ease-in-out">
                Read Preview
              </button>
            </a>
          </div>
          <div class="basis-4/6">
            <div class="mt-2 mb-0 font-title text-xl p-2 pb-0 rounded text-teal-900">
              {book?.title}
            </div>
            <div class="p-2 pt-0 pb-0 text-teal-800 font-body">
              By {book?.authors}
            </div>
            <div class="p-2 pt-0 text-teal-800 font-body">
              Published in {book?.published}
            </div>
            <div class="overflow-scroll font-body p-2 h-52">{book?.desc}</div>
            <div class="flex flex-end">
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900">Mature?</p>
                <p class="text-teal-600">{book?.maturity}</p>
              </div>
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900">Rating</p>
                <p class="text-teal-600">{book?.rating}</p>
              </div>
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900">Page Count</p>
                <p class="text-teal-600">{pages}</p>
              </div>
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900">Price</p>
                <p class="text-teal-600">{book?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="flex w-6/12">
        {/* {console.log(book?.isbn)} */}
        <div class="border-solid border-1 border-slate-50 flex rounded-xl p-3 m-5 bg-white shadow-lg">
          <div class="basis-2/6">
            <img src={book?.image} class="w-44 m-5 mb-1 rounded" />
            <a href={book?.preview} target="_blank" class="m-0 p-0">
              <button class="h-8 font-body rounded w-44 mt-0 m-5 mb-1 bg-teal-900 text-slate-50 text-base hover:bg-teal-700 duration-200 ease-in-out">
                Read Preview
              </button>
            </a>
            <select
              class="h-8 font-body rounded w-44 m-5 mt-0 bg-teal-900 text-slate-50 text-center hover:bg-teal-700 duration-200 ease-in-out focus:bg-teal-200 focus:text-teal-900"
              name="shelf"
              id="shelf"
              onChange={(event) => handleChange(event, book, pages)}
            >
              <option value="dummy">Select</option>
              <option value="reading">Currently Reading</option>
              <option value="to-read">Want to Read</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div class="basis-4/6">
            <div class="mt-2 mb-0 font-title text-xl p-2 pb-0 rounded text-teal-900">
              {book?.title}
            </div>
            <div class="p-2 pt-0 pb-0 text-teal-800 font-body">
              By {book?.authors}
            </div>
            <div class="p-2 pt-0 text-teal-800 font-body">
              Published in {book?.published}
            </div>
            <div class="overflow-scroll font-body p-2 h-52">{book?.desc}</div>
            <div class="flex flex-end">
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900 text-sm">Mature?</p>
                <p class="text-teal-600 text-lg">{book?.maturity}</p>
              </div>
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900 text-sm">Rating</p>
                <p class="text-teal-600 text-lg">{book?.rating}</p>
              </div>
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900 text-sm">Page Count</p>
                <p class="text-teal-600 text-lg">{pages}</p>
              </div>
              <div class="basis-1/4 font-body p-2">
                <p class="text-teal-900 text-sm">{book?.type}</p>
                <p class="text-teal-600 text-lg">{book?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
