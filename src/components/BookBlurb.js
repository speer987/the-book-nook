import GridElement from "./GridElement";
import ImageGridElement from "./ImageGridElement";
export default function BookBlurb({ data }) {
  let currentVolume,
    title,
    image,
    authors,
    desc,
    maturity,
    published,
    rating,
    price,
    pages,
    preview = null;

  data?.items?.map((item) => {
    currentVolume = item?.volumeInfo;
    title = currentVolume?.title;
    image = currentVolume?.imageLinks.thumbnail;
    authors = currentVolume?.authors;
    desc = currentVolume?.description;
    maturity = currentVolume?.maturityRating;
    published = currentVolume?.publishedDate;
    rating = currentVolume?.averageRating;
    // price = currentVolume?.price
    pages = currentVolume?.pageCount;
    preview = currentVolume?.previewLink;
  });

  return (
    <div className="blurb-grid flex-container flex-row">
      <ImageGridElement id="grid-image" src={image} />
      <GridElement id="grid-title" content={title} />
      <GridElement id="grid-author" content={authors} />
      <GridElement id="grid-desc" content={desc} />
      <GridElement id="grid-maturity" content={maturity} />
      <GridElement id="grid-published" content={published} />
      <GridElement id="grid-rating" content={rating} />
      <GridElement id="grid-pages" content={pages} />
      <GridElement id="grid-preview" content={preview} />
    </div>
  );
}

// <div class="blurb-grid flex-container flex-row">
//   <GridElement
//     id="grid-image"
//     className="blue-background"
//     content="Image"
//   />
//   <GridElement
//     id="grid-title"
//     className="blue-background"
//     content="Title"
//   />
//   <div id="grid-author" class="blue-background">
//     Author
//   </div>
//   <div id="grid-desc" class="blue-background">
//     Description
//   </div>
//   <div id="grid-maturity" class="grid-child blue-background">
//     Maturity Rating
//   </div>
//   <div id="grid-published" class="grid-child blue-background">
//     Published Date
//   </div>
//   <div id="grid-rating" class="grid-child blue-background">
//     Rating
//   </div>
//   <div id="grid-price" class="grid-child blue-background">
//     Price in USD
//   </div>
//   <div id="grid-add" class="grid-child blue-background">
//     Add to Bookshelf
//   </div>
//   <div id="grid-pageno" class="grid-child blue-background">
//     Page Count
//   </div>
//   <div id="grid-preview" class="grid-child blue-background">
//     Preview Link
//   </div>
// </div>
