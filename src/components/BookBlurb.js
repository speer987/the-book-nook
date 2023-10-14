import BookInfo from "./BookInfo";
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

  let bookArray = [];
  let currentDict = {};

  data?.map((book) => {
    currentVolume = book?.volumeInfo;
    title = currentVolume?.title;
    image = currentVolume?.imageLinks?.thumbnail;
    authors = currentVolume?.authors;
    desc = currentVolume?.description;
    maturity = currentVolume?.maturityRating;
    published = currentVolume?.publishedDate;
    rating = currentVolume?.averageRating;
    pages = currentVolume?.pageCount;
    preview = currentVolume?.previewLink;

    base = book?.saleInfo;
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
    if (book?.saleInfo?.saleability === "FOR_SALE" && currency === "USD") {
      listPrice = base?.listPrice?.amount?.toString();
      price = listPrice + " " + currency;
    } else {
      price = "Not saleable within the United States.";
    }

    currentDict = {
      title: title,
      authors: authors,
      image: image,
      desc: desc,
      maturity: maturity,
      published: published,
      rating: rating,
      pages: pages,
      preview: preview,
      price: price,
      type: type,
    };

    bookArray.push(currentDict);
    // <BookInfo
    //   title={title}
    //   authors={authors}
    //   image={image}
    //   desc={desc}
    //   maturity={maturity}
    //   published={published}
    //   rating={rating}
    //   pages={pages}
    //   preview={preview}
    //   price={price}
    //   type={type}
    // />;
    // right now, it's only returning info for the last book after searching midnight library (cave thingie)
    // book?.map((info) => console.log(info));
  });

  return bookArray?.map((book) => (
    <div className="blurb-grid flex-container flex-row">
      <ImageGridElement id="grid-image" src={book.image} />
      <GridElement id="grid-title" content={book.title} />
      <GridElement
        id="grid-author"
        content={book.authors}
        display="Author(s)"
      />
      <GridElement id="grid-desc" content={book.desc} />
      <GridElement
        id="grid-maturity"
        content={book.maturity}
        display="Maturity"
      />
      <GridElement
        id="grid-published"
        content={book.published}
        display="Published"
      />
      <GridElement id="grid-rating" content={book.rating} display="Rating" />
      <GridElement id="grid-page" content={book.pages} display="Page Count" />
      <GridPrevButton
        id="grid-preview"
        content={book.preview}
        display="Read Preview"
      />
      <GridElement id="grid-price" content={book.price} display={book.type} />
      <GridElement id="grid-add" content="" />
    </div>
  ));
}
