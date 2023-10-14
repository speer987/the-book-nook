export default function GridElement({ display = null, id, content }) {
  if (display !== null) {
    return <div id={id}>{display + ": " + content}</div>;
  } else {
    return <div id={id}>{content}</div>;
  }
}
