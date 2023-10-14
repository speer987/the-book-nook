import GridElement from "./GridElement";
import ImageGridElement from "./ImageGridElement";
import GridPrevButton from "./GridPrevButton";
export default function BookInfo({
  title,
  image,
  authors,
  desc,
  maturity,
  published,
  rating,
  pages,
  preview,
  price,
  type,
}) {
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
