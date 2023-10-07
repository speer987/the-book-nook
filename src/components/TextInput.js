export default function TextInput({ type, value, displayName, setter }) {
  return (
    <div>
      <label htmlFor={value}>{displayName}</label>
      <input type={type} onChange={(e) => setter(e.target.value)} />
      <br />
    </div>
  );
}
