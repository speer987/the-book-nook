import BookCoverLog from "./BookCoverLog";
import {
  collection,
  doc,
  setDoc,
  onSnapshot,
  query,
  where,
  increment,
  FieldValue,
  updateDoc,
  getDoc,
} from "firebase/firestore";
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
  const dbProgressRef = collection(db, "progress");
  // Got some help from ChatGPT for the date
  let today = new Date();
  let formattedDate = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;

  let pages_logged = parseInt(0);
  function getUserProgress() {
    let userProgress = document?.getElementById("user_input")?.value;
    let userDate = document?.getElementById("date_input")?.value;

    if (userProgress > logBook?.pages && userDate !== null) {
      userProgress = null;
    } else {
      pages_logged += parseInt(userProgress);
    }

    console.log(pages_logged);
    // if (pages_logged <= logBook?.pages) {
    if (logBook && userProgress && userDate) {
      setDoc(
        doc(dbProgressRef, logBook?.id),
        // https://stackoverflow.com/a/69001255 - helped with the increment method used with setDoc
        { [userDate]: increment(userProgress) },
        { merge: true }
      );
    }
    // }
  }
  useEffect(getUserProgress, []);

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
      <div class=" flex p-7">
        <div class="w-1/2">
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
          <div class="m-5 text-lg font-title text-teal-900 h-96">
            <LineChart db={dbProgressRef} book={logBook} />
          </div>
          <div className="flex m-5">
            <input
              id="date_input"
              type="date"
              max={formattedDate}
              className="rounded flex border-solid border-2 border-slate-300 w-2/3 font-body h-8"
            ></input>
            <input
              id="user_input"
              type="number"
              className="rounded flex border-solid border-2 border-slate-300 w-2/3 font-body h-8"
            ></input>
            <button
              onClick={() => getUserProgress()}
              class="rounded bg-teal-900 m-1.5 border-solid w-1/3 h-8 text-slate-100 text-center"
            >
              Log
            </button>
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
                  key={index}
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
      <div class="flex p-7">
        <div class=" w-1/2">
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
