import Header from "../components/Header";
import CurrentPageWithInfo from "../components/CurrentPageWithInfo";
import { useAuthentication } from "../services/AuthServices";
import SignedInBookshelf from "../components/SignedInBookshelf";
import SignedOutBookshelf from "../components/SignedOutBookshelf";
const BookshelfPage = () => {
  const user = useAuthentication();
  return (
    <div>
      <Header />
      <div class="bg-gradient-to-b from-teal-100 text-lg p-7 pb-0">
        <CurrentPageWithInfo
          page="Bookshelf Page"
          info={"Your Virtual Bookshelf"}
        />
      </div>
      {user ? <SignedInBookshelf /> : <SignedOutBookshelf />}
    </div>
  );
};

export default BookshelfPage;
