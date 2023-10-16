export default function TextInput({ type, value, displayName, setter }) {
  return (
    <div class="px-7">
      <label class="text-teal-800 font-body pr-3 pl-0 m-0" htmlFor={value}>
        {displayName}
      </label>
      <input
        class="rounded border-2 border-teal-600 font-body"
        type={type}
        onChange={(e) => setter(e.target.value)}
      />
      <br />
    </div>
  );
}
