export default function BookList({ bookList }) {
  return (
    <div class="flex flex-row flex-wrap justify-between mt-6">
      {bookList?.map((bookInfo) => (
        <img
          class="w-1/6 rounded-lg m-5 hover:scale-110 transition ease-in-out hover:shadow-lg shadow-teal-900"
          key={bookInfo?.book_image}
          src={bookInfo?.book_image}
        />
      ))}
    </div>
  );
}
