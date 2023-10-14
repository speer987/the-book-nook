import GridElement from "./GridElement";
import ImageGridElement from "./ImageGridElement";
import GridPrevButton from "./GridPrevButton";
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
    preview,
    currency,
    listPrice,
    base,
    type,
    type_bool = null;

  data?.items?.map((item) => {
    currentVolume = item?.volumeInfo;
    title = currentVolume?.title;
    image = currentVolume?.imageLinks?.thumbnail;
    authors = currentVolume?.authors;
    desc = currentVolume?.description;
    maturity = currentVolume?.maturityRating;
    published = currentVolume?.publishedDate;
    rating = currentVolume?.averageRating;
    pages = currentVolume?.pageCount;
    preview = currentVolume?.previewLink;

    base = item?.saleInfo;
    type_bool = base?.isEbook;
    if (type_bool === true) {
      type = "E-Book Price";
    } else {
      type = "Print Price";
    }

    if (maturity === "NOT_MATURE") {
      maturity = "Not Mature";
    } else {
      maturity = "Mature";
    }

    if (rating === undefined) {
      rating = "None";
    }

    currency = base?.listPrice?.currencyCode;
    if (item?.saleInfo?.saleability === "FOR_SALE" && currency === "USD") {
      listPrice = base?.listPrice?.amount?.toString();
      price = listPrice + " " + currency;
    } else {
      price = "Not saleable within the United States.";
    }
  });

  return (
    <div className="blurb-grid flex-container flex-row">
      <ImageGridElement id="grid-image" src={image} />
      <GridElement id="grid-title" content={title} />
      <GridElement id="grid-author" content={authors} display="Author(s)" />
      <GridElement id="grid-desc" content={desc} />
      <GridElement id="grid-maturity" content={maturity} display="Maturity" />
      <GridElement
        id="grid-published"
        content={published}
        display="Published"
      />
      <GridElement id="grid-rating" content={rating} display="Rating" />
      <GridElement id="grid-page" content={pages} display="Page Count" />
      <GridPrevButton
        id="grid-preview"
        content={preview}
        display="Read Preview"
      />
      <GridElement id="grid-price" content={price} display={type} />
      <GridElement id="grid-add" content="" />
    </div>
  );
}
