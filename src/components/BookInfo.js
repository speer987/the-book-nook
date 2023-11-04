export default function BookInfo({ book }) {
  return (
    <div class="flex w-6/12">
      {console.log(book)}
      <div class="border-solid border-1 border-slate-50 flex rounded-xl p-3 m-5 bg-white shadow-lg">
        <div class="basis-2/6">
          <img src={book?.image} class="w-44 m-5 mb-1 rounded" />
          <a href={book?.preview} target="_blank" class="m-0 p-0">
            <button class="h-8 font-body rounded w-44 mt-0 m-5 mb-1 bg-teal-900 text-slate-50 text-base">
              Read Preview
            </button>
          </a>
          <select
            class="h-8 font-body rounded w-44 m-5 mt-0 bg-teal-900 text-slate-50 text-center"
            name="shelf"
            id="shelf"
          >
            <option value="dummy">Select</option>
            <option value="Reading">Currently Reading</option>
            <option value="Want to Read">Want to Read</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div class="basis-4/6">
          <div class="mt-2 mb-0 font-title text-xl p-2 pb-0 rounded text-teal-900">
            {book?.title}
          </div>
          <div class="p-2 pt-0 pb-0 text-teal-800 font-body">
            By {book?.authors}
          </div>
          <div class="p-2 pt-0 text-teal-800 font-body">
            Published in {book?.published}
          </div>
          <div class="overflow-scroll font-body p-2 h-52">{book?.desc}</div>
          <div class="flex flex-end">
            <div class="basis-1/4 font-body p-2">
              <p class="text-teal-900">Maturity</p>
              <p class="text-teal-600">{book?.maturity}</p>
            </div>
            <div class="basis-1/4 font-body p-2">
              <p class="text-teal-900">Rating</p>
              <p class="text-teal-600">{book?.rating}</p>
            </div>
            <div class="basis-1/4 font-body p-2">
              <p class="text-teal-900">Page Count</p>
              <p class="text-teal-600">{book?.pages}</p>
            </div>
            <div class="basis-1/4 font-body p-2">
              <p class="text-teal-900">Price</p>
              <p class="text-teal-600">{book?.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
