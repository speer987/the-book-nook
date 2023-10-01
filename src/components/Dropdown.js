export default function Dropdown({ list, purpose, idName }) {
  return (
    <div>
      <label for={purpose}>{purpose}</label>
      <select name={purpose} id={idName}>
        {list?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}
