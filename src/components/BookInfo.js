import GridElement from "./GridElement";
import ImageGridElement from "./ImageGridElement";
import GridPrevButton from "./GridPrevButton";
export default function BookInfo({ book }) {
  return (
    <div class="flex w-6/12">
      <div class="border-solid border-1 border-slate-50 flex rounded-xl p-3 m-5 bg-white shadow-lg">
        <div class="basis-2/6">
          <img src={book?.image} class="w-44 m-5 mb-1 rounded" />
          <a href={book?.preview} target="_blank" class="m-0 p-0">
            <button class="h-8 font-body rounded w-44 mt-0 m-5 mb-1 bg-teal-900 text-slate-50 text-base">
              Read Preview
            </button>
          </a>
          <button class="h-8 font-body rounded w-44 m-5 mt-0 bg-teal-900 text-slate-50">
            Add to Shelf
          </button>
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

    // <div className="blurb-grid flex-container flex-row">
    //   <ImageGridElement id="grid-image" src={book?.image} />
    //   <GridElement id="grid-title" content={book?.title} />
    //   <GridElement
    //     id="grid-author"
    //     content={book?.authors}
    //     display="Author(s)"
    //   />
    //   <GridElement id="grid-desc" content={book?.desc} />
    //   <GridElement
    //     id="grid-maturity"
    //     content={book?.maturity}
    //     display="Maturity"
    //   />
    //   <GridElement
    //     id="grid-published"
    //     content={book?.published}
    //     display="Published"
    //   />
    //   <GridElement id="grid-rating" content={book?.rating} display="Rating" />
    //   <GridElement id="grid-page" content={book?.pages} display="Page Count" />
    //   <GridPrevButton
    //     id="grid-preview"
    //     content={book?.preview}
    //     display="Read Preview"
    //   />
    //   <GridElement id="grid-price" content={book?.price} display={book?.type} />
    //   <GridElement id="grid-add" content="" />
    // </div>
  );
}
