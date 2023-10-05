export default function BookList({ bookList }) {
  return (
    <div class="flex-container flex-row covers-container">
      {bookList?.map((bookInfo) => (
        <img
          class="book-cover"
          key={bookInfo?.book_image}
          src={bookInfo?.book_image}
        />
      ))}
    </div>
  );
}
