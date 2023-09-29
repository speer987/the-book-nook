import Header from "../components/Header";
import OptionsMenu from "../components/OptionsMenu";
const BookshelfPage = () => {
  return (
    <div>
      <div>
        <Header />
        <OptionsMenu selected="bookshelf" />
      </div>
      <div>Bookshelf Page</div>
    </div>
  );
};

export default BookshelfPage;
