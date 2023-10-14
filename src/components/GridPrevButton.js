export default function GridPrevButton({ id, content, display }) {
  return (
    <button id={id}>
      <a href={content} target="_blank">
        {display}
      </a>
    </button>
  );
}
