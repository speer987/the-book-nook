import Header from "../components/Header";
import CurrentPageWithInfo from "../components/CurrentPageWithInfo";
import BookCoverLog from "../components/BookCoverLog";
const BookshelfPage = () => {
  return (
    <div>
      <Header />
      <div class="bg-gradient-to-b from-teal-100 text-lg p-7 pb-0">
        <CurrentPageWithInfo
          page="Bookshelf Page"
          info={"Your Virtual Bookshelf"}
        />
      </div>
      <div class="border-solid border-2 flex p-7">
        <div class="border-solid border-2 border-red-100 w-1/2">
          <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900 font-bold">
            Book Progress
          </div>
          <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900">
            Graph goes here
          </div>
          <div class="flex border-solid border-2 border-blue-200 m-5">
            <div class="flex border-solid border-2 border-blue-200 w-2/3">
              Log Textbar
            </div>
            <button class="flex border-solid border-2 border-blue-200 w-1/3">
              Log
            </button>
          </div>
        </div>
        <div class="border-solid border-2 border-green-100 w-1/2">
          <div class="border-solid border-2 border-blue-200 m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Reading
            </div>
            <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
              <BookCoverLog
                actionText={"Mark as Complete"}
                optLogText={"Log"}
              />
              <BookCoverLog
                actionText={"Mark as Complete"}
                optLogText={"Log"}
              />
              <BookCoverLog
                actionText={"Mark as Complete"}
                optLogText={"Log"}
              />
              <BookCoverLog
                actionText={"Mark as Complete"}
                optLogText={"Log"}
              />
              <BookCoverLog
                actionText={"Mark as Complete"}
                optLogText={"Log"}
              />
            </div>
          </div>
          <div class="border-solid border-2 border-blue-200 m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              To Read
            </div>
            <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
              <BookCoverLog actionText={"Move to Reading"} />
              <BookCoverLog actionText={"Move to Reading"} />
              <BookCoverLog actionText={"Move to Reading"} />
              <BookCoverLog actionText={"Move to Reading"} />
              <BookCoverLog actionText={"Move to Reading"} />
            </div>
          </div>
          <div class="border-solid border-2 border-blue-200 m-5">
            <div class="text-lg font-title text-teal-900 font-bold">
              Completed
            </div>
            <div>
              <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
                <BookCoverLog actionText={"Move to To Read"} />
                <BookCoverLog actionText={"Move to To Read"} />
                <BookCoverLog actionText={"Move to To Read"} />
                <BookCoverLog actionText={"Move to To Read"} />
                <BookCoverLog actionText={"Move to To Read"} />
                <BookCoverLog actionText={"Move to To Read"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookshelfPage;
