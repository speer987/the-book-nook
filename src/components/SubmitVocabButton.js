export default function SubmitVocabButton({ word, setData }) {
  function submit(e) {
    e.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    console.log(url);
    fetch(url)
      .then((response) => response?.json())
      .then((response_json) => {
        console.log(response_json);
        setData(response_json);
      })
      .catch((error) => setData(error));
  }

  return (
    <button
      class="rounded bg-teal-900 font-body text-slate-50 ml-5 p-3"
      onClick={submit}
    >
      Search
    </button>
  );
}
