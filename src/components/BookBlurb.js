import BookInfo from "./BookInfo";
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
      price = "N/A";
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
  });

  return (
    <div class="flex flex-wrap">
      {bookArray?.map((book, index) => (
        <BookInfo key={index} book={book} />
      ))}
    </div>
  );
}
