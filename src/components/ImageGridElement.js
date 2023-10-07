export default function ImageGridElement({ id, src }) {
  return (
    <div id={id}>
      <img src={src} alt="book cover image" />
    </div>
  );
}
