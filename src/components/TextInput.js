export default function TextInput({ type, value, displayName, setter }) {
  return (
    <div class="px-7">
      <label
        class="m-1.5 text-lg px-0 text-teal-800 font-body my-2"
        htmlFor={value}
      >
        {displayName}
      </label>
      <input
        class="m-1.5 ml-0 text-lg px-1 rounded border-2 border-teal-600 font-body my-2"
        type={type}
        onChange={(e) => setter(e.target.value)}
        required
      />
      <br />
    </div>
  );
}
