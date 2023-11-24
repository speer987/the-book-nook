import BookCoverLog from "./BookCoverLog";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
import LineChart from "./LineChart";

export default function SignedInBookshelf() {
  const dbRef = collection(db, "books");
  const completedQuery = query(dbRef, where("state", "==", "completed"));
  const toReadQuery = query(dbRef, where("state", "==", "to-read"));
  const readingQuery = query(dbRef, where("state", "==", "reading"));
  let [readingBooks, setReadingBooks] = useState([]);
  let [toReadBooks, setToReadBooks] = useState([]);
  let [completedBooks, setCompletedBooks] = useState([]);
  let [logBook, setLogBook] = useState(null);
  let tempArray = [];
  let [progress, setProgress] = useState(null);

  // const extractUserInput = () => {
  //   // https://www.youtube.com/watch?v=PX_2FSs5Glo help to update user input.
  //   setProgress(document.getElementById("user_input").value);
  // };

  // useEffect(extractUserInput, [progress]);

  // Got help from here: https://www.youtube.com/watch?v=gEaY2GZMino
  function fetchBookshelves() {
    onSnapshot(completedQuery, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id });
      });
      setCompletedBooks(tempArray);
      tempArray = [];
    });

    onSnapshot(toReadQuery, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id });
      });
      setToReadBooks(tempArray);
      tempArray = [];
    });

    onSnapshot(readingQuery, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        tempArray.push({ ...doc.data(), id: doc.id });
      });
      setReadingBooks(tempArray);
      tempArray = [];
    });
  }

  useEffect(fetchBookshelves, []);

  if (logBook) {
    return (
      <div class="border-solid border-2 flex p-7">
        <div class="border-solid border-2 border-red-100 w-1/2">
          <div class="m-5 mb-0 text-xl font-title text-teal-900 font-bold">
            Currently Logging Progress For
          </div>
          <div className="border-l-8 border-teal-700 m-10 mt-1">
            <div class="mb-0 text-lg font-title text-teal-700 font-bold ml-2">
              {logBook?.title} by {logBook?.authors}
            </div>
            <div class="text-lg font-title text-teal-700 font-bold ml-2">
              ISBN: {logBook?.id}
            </div>
          </div>
          <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900">
            <LineChart pages={logBook?.pages} />
          </div>
          <div class="flex border-solid border-2 border-blue-200 m-5">
            <input
              id="user_input"
              type="number"
              class="rounded flex border-solid border-2 border-slate-300 w-2/3 font-body h-8"
            ></input>
            <button class="rounded bg-teal-900 m-1.5 border-solid w-1/3 h-8 text-slate-100 text-center">
              Log
            </button>
          </div>
          <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900">
            <LineChart pages={logBook?.pages} />
          </div>
        </div>
        <div class="w-1/2">
          <div class="m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Currently Reading
            </div>
            <div class="flex overflow-x-auto">
              {readingBooks.map((index, book) => (
                <BookCoverLog
                  book={readingBooks[book]}
                  optLogText={"Log"}
                  setLogBook={setLogBook}
                  state={"completed"}
                  actionText={"Mark as Complete"}
                />
              ))}
            </div>
          </div>
          <div class="m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Want To Read
            </div>
            <div class="flex overflow-x-auto">
              {toReadBooks?.map((index, book) => (
                <BookCoverLog
                  book={toReadBooks[book]}
                  state={"reading"}
                  actionText={"Move to Reading"}
                />
              ))}
            </div>
          </div>
          <div class="m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Completed
            </div>
            <div>
              <div class="flex overflow-x-auto">
                {completedBooks?.map((index, book) => (
                  <BookCoverLog
                    book={completedBooks[book]}
                    state={"to-read"}
                    actionText={"Move to To Read"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class="border-solid border-2 flex p-7">
        <div class="border-solid border-2 border-red-100 w-1/2">
          <div class="m-5 mb-0 text-xl font-title text-teal-900 font-bold">
            Please select a book to log.
          </div>
        </div>
        <div class="w-1/2">
          <div class="m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Currently Reading
            </div>
            <div class="flex overflow-x-auto">
              {readingBooks.map((index, book) => (
                <BookCoverLog
                  book={readingBooks[book]}
                  optLogText={"Log"}
                  setLogBook={setLogBook}
                  state={"completed"}
                  actionText={"Mark as Complete"}
                />
              ))}
            </div>
          </div>
          <div class="m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Want To Read
            </div>
            <div class="flex overflow-x-auto">
              {toReadBooks?.map((index, book) => (
                <BookCoverLog
                  book={toReadBooks[book]}
                  state={"reading"}
                  actionText={"Move to Reading"}
                />
              ))}
            </div>
          </div>
          <div class="m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Completed
            </div>
            <div>
              <div class="flex overflow-x-auto">
                {completedBooks?.map((index, book) => (
                  <BookCoverLog
                    book={completedBooks[book]}
                    state={"to-read"}
                    actionText={"Move to To Read"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
