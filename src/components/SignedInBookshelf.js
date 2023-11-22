import BookCoverLog from "./BookCoverLog";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useEffect, useState } from "react";
export default function SignedInBookshelf() {
  // const dbRef = collection(db, "books");
  // const completedQuery = query(dbRef, where("state", "==", "completed"));
  // const toReadQuery = query(dbRef, where("state", "==", "to-read"));
  // const readingQuery = query(dbRef, where("state", "==", "reading"));
  // let [readingBooks, setReadingBooks] = useState([]);
  // let [toReadBooks, setToReadBooks] = useState([]);
  // let [completedBooks, setCompletedBooks] = useState([]);
  // let tempArray = [];

  // // Got help from here: https://www.youtube.com/watch?v=gEaY2GZMino
  // function fetchBookshelves() {
  //   onSnapshot(completedQuery, (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       tempArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setCompletedBooks(tempArray);
  //     tempArray = [];
  //   });

  //   onSnapshot(toReadQuery, (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       tempArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setToReadBooks(tempArray);
  //     tempArray = [];
  //   });

  //   onSnapshot(readingQuery, (snapshot) => {
  //     snapshot.docs.forEach((doc) => {
  //       tempArray.push({ ...doc.data(), id: doc.id });
  //     });
  //     setReadingBooks(tempArray);
  //   });
  // }

  // useEffect(fetchBookshelves, []);

  // console.log(readingBooks);
  // console.log(completedBooks);
  // console.log(toReadBooks);
  return (
    // <div class="border-solid border-2 flex p-7">
    //   <div class="border-solid border-2 border-red-100 w-1/2">
    //     <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900 font-bold">
    //       Book Progress
    //     </div>
    //     <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900 font-bold">
    //       Book Title Goes Here
    //     </div>
    //     <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900">
    //       Graph goes here
    //     </div>
    //     <div class="flex border-solid border-2 border-blue-200 m-5">
    //       <input
    //         type="number"
    //         class="rounded flex border-solid border-2 border-slate-300 w-2/3 font-body h-8"
    //       ></input>
    //       <button class="rounded bg-teal-900 m-1.5 border-solid w-1/3 h-8 text-slate-100 text-center">
    //         Log
    //       </button>
    //     </div>
    //   </div>
    //   <div class="border-solid border-2 border-green-100 w-1/2">
    //     <div class="border-solid border-2 border-blue-200 m-5">
    //       <div class="text-lg font-title text-teal-900 font-bold">Reading</div>
    //       <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
    //         {/* {console.log("readingBooks:", readingBooks)} */}
    //         {/* {readingBooks.map((index, book) => (
    //           <BookCoverLog
    //             book={book}
    //             optLogText={"Log"}
    //             actionText={"Mark as Complete"}
    //           />
    //         ))} */}
    //       </div>
    //     </div>
    //     <div class="border-solid border-2 border-blue-200 m-5">
    //       <div class="text-lg font-title text-teal-900 font-bold">To Read</div>
    //       <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
    //         {/* {toReadBooks?.map((index, book) => (
    //           <BookCoverLog
    //             book={toReadBooks[book]}
    //             actionText={"Move to Reading"}
    //           />
    //         ))} */}
    //         {/* console.log(toReadBooks[book]) */}
    //         {/* <BookCoverLog actionText={"Move to Reading"} />
    //         <BookCoverLog actionText={"Move to Reading"} />
    //         <BookCoverLog actionText={"Move to Reading"} />
    //         <BookCoverLog actionText={"Move to Reading"} />
    //         <BookCoverLog actionText={"Move to Reading"} /> */}
    //       </div>
    //     </div>
    //     <div class="border-solid border-2 border-blue-200 m-5">
    //       <div class="text-lg font-title text-teal-900 font-bold">
    //         Completed
    //       </div>
    //       <div>
    //         <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
    //           {/* {completedBooks?.map((index, book) => (
    //             <BookCoverLog
    //               book={completedBooks[book]}
    //               actionText={"Move to To Read"}
    //             />
    //           ))} */}
    //           {/* <BookCoverLog actionText={"Move to To Read"} />
    //           <BookCoverLog actionText={"Move to To Read"} />
    //           <BookCoverLog actionText={"Move to To Read"} />
    //           <BookCoverLog actionText={"Move to To Read"} />
    //           <BookCoverLog actionText={"Move to To Read"} />
    //           <BookCoverLog actionText={"Move to To Read"} /> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div></div>
  );
}
