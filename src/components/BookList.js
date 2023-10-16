import BookImage from "./BookImage";
import { useState } from "react";
export default function BookList({ bookList }) {
  // const [bookData, setBookData] = useState(null);
  return (
    <div class="flex flex-wrap justify-between mt-6">
      {bookList?.map((bookInfo) => (
        <BookImage bookInfo={bookInfo} />
      ))}
    </div>
  );
}
