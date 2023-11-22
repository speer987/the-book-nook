export default function BookCoverLog({ actionText, optLogText = null, book }) {
  return (
    <div class="flex flex-col shrink-0">
      <div class="border-solid border-2 border-blue-200 m-2 mb-1">
        <div class="h-44">
          <img src={book?.image}></img>
        </div>
      </div>
      {optLogText && (
        <button class="rounded mx-2 my-1 bg-teal-900 text-slate-100 p-1 font-body">
          {optLogText}
        </button>
      )}
      <button class="rounded mx-2 mb-2 bg-teal-900 text-slate-100 p-1 font-body">
        {actionText}
      </button>
    </div>
  );
}
