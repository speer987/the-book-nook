import { setDoc, doc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";
export default function BookCoverLog({
  actionText,
  optLogText = null,
  book,
  state,
}) {
  const dbRef = collection(db, "books");
  const handleChange = (state) => {
    setDoc(doc(dbRef, book?.id), {
      state: state,
      title: book?.title,
      authors: book?.authors,
      image: book?.image,
      pages: book?.pages,
    });

    let bookshelf = "";
    if (state === "to-read") {
      bookshelf = "want to read";
    } else if (state === "completed") {
      bookshelf = "have completed";
    } else {
      bookshelf = "are currently reading";
    }

    setTimeout(() => {
      alert(
        `You moved "${book?.title}" by ${book?.authors} to the shelf of books you ${bookshelf}.`
      );
    }, 50);
  };

  if (book?.pages === 0 || book?.pages === "N/A") {
    optLogText = null;
  }

  return (
    <div class="flex flex-col shrink-0">
      <div class="m-3 mb-2">
        <img class="w-40 h-56 rounded-md" src={book?.image}></img>
      </div>
      {optLogText && (
        <button class="hover:bg-teal-700 rounded m-2 my-1 bg-teal-900 text-slate-100 p-1 font-body">
          {optLogText}
        </button>
      )}
      <button
        onClick={() => handleChange(state)}
        class="hover:bg-teal-700 rounded mx-2 mb-2 my-1 bg-teal-900 text-slate-100 p-1 font-body"
      >
        {actionText}
      </button>
    </div>
  );
}
