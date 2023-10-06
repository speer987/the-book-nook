export default function BookBlurb() {
  return (
    <div>
      <div class="blurb-grid flex-container flex-row">
        <div id="grid-image" class="blue-background">
          Image
        </div>
        <div id="grid-title" class="blue-background">
          Title
        </div>
        <div id="grid-author" class="blue-background">
          Author
        </div>
        <div id="grid-desc" class="blue-background">
          Description
        </div>
        <div id="grid-maturity" class="grid-child blue-background">
          Maturity Rating
        </div>
        <div id="grid-published" class="grid-child blue-background">
          Published Date
        </div>
        <div id="grid-rating" class="grid-child blue-background">
          Rating
        </div>
        <div id="grid-price" class="grid-child blue-background">
          Price in USD
        </div>
        <div id="grid-add" class="grid-child blue-background">
          Add to Bookshelf
        </div>
        <div id="grid-pageno" class="grid-child blue-background">
          Page Count
        </div>
        <div id="grid-preview" class="grid-child blue-background">
          Preview Link
        </div>
      </div>
    </div>
  );
}
