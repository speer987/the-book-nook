import GridElement from "./GridElement";
import ImageGridElement from "./ImageGridElement";
import GridPrevButton from "./GridPrevButton";
export default function BookInfo({ book }) {
  return (
    <div class="flex w-screen p-5">
      <div class="border-2 basis-1/6">
        <div class="border-2">
          <img src={book?.image} class="object-cover w-80" />
        </div>
        <div class="border-2">preview btn</div>
        <div class="border-2">add btn</div>
      </div>
      <div class="border-2 basis-5/6">
        <div class="border-2">title</div>
        <div class="flex">
          <div class="border-2 basis-1/2">author</div>
          <div class="border-2 basis-1/2">publsihed</div>
        </div>
        <div class="border-2 h-40">desc</div>
        <div class="flex">
          <div class="border-2 basis-1/4">mat</div>
          <div class="border-2 basis-1/4">rat</div>
          <div class="border-2 basis-1/4">page no</div>
          <div class="border-2 basis-1/4">price</div>
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
