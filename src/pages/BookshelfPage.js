import Header from "../components/Header";
import CurrentPageWithInfo from "../components/CurrentPageWithInfo";
import BookCoverLog from "../components/BookCoverLog";
import SignedInBookshelf from "../components/SignedInBookshelf";
import SignedOutBookshelf from "../components/SignedOutBookshelf";
const BookshelfPage = () => {
  const signedIn = true;
  return (
    <div>
      <Header />
      <div class="bg-gradient-to-b from-teal-100 text-lg p-7 pb-0">
        <CurrentPageWithInfo
          page="Bookshelf Page"
          info={"Your Virtual Bookshelf"}
        />
      </div>
      {signedIn ? <SignedInBookshelf /> : <SignedOutBookshelf />}
    </div>
  );
};

export default BookshelfPage;
