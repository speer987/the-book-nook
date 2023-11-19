import BookCoverLog from "./BookCoverLog";
export default function SignedInBookshelf() {
  return (
    <div class="border-solid border-2 flex p-7">
      <div class="border-solid border-2 border-red-100 w-1/2">
        <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900 font-bold">
          Book Progress
        </div>
        <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900 font-bold">
          Book Title Goes Here
        </div>
        <div class="border-solid border-2 border-blue-200 m-5 text-lg font-title text-teal-900">
          Graph goes here
        </div>
        <div class="flex border-solid border-2 border-blue-200 m-5">
          <input
            type="number"
            class="rounded flex border-solid border-2 border-slate-300 w-2/3 font-body h-8"
          ></input>
          <button class="rounded bg-teal-900 m-1.5 border-solid w-1/3 h-8 text-slate-100 text-center">
            Log
          </button>
        </div>
      </div>
      <div class="border-solid border-2 border-green-100 w-1/2">
        <div class="border-solid border-2 border-blue-200 m-5">
          <div class="text-lg font-title text-teal-900 font-bold">Reading</div>
          <div class="flex border-solid border-2 border-blue-200 overflow-x-auto">
            <BookCoverLog actionText={"Mark as Complete"} optLogText={"Log"} />
            <BookCoverLog actionText={"Mark as Complete"} optLogText={"Log"} />
            <BookCoverLog actionText={"Mark as Complete"} optLogText={"Log"} />
            <BookCoverLog actionText={"Mark as Complete"} optLogText={"Log"} />
            <BookCoverLog actionText={"Mark as Complete"} optLogText={"Log"} />
          </div>
        </div>
        <div class="border-solid border-2 border-blue-200 m-5">
          <div class="text-lg font-title text-teal-900 font-bold">To Read</div>
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
  );
}
