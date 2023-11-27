import { G_BOOKS_API_KEY } from "../apiKeys";
export default function SubmitButton({ title, author, setData }) {
  function submit(e) {
    e.preventDefault();
    const apiKey = G_BOOKS_API_KEY;
    let url = "";
    let base_url = `https://www.googleapis.com/books/v1/volumes?`;

    if (title !== "" && author !== "") {
      url = base_url.concat(`q=${title}+inauthor:${author}`);
      // https://stackoverflow.com/a/1983661
      url = url.replace(/\s+/g, "-").toLowerCase();
      url = url.concat(`&key=${apiKey}`);
    } else if (title !== "") {
      url = base_url.concat(`q=${title}`);
      // https://stackoverflow.com/a/1983661
      url = url.replace(/\s+/g, "-").toLowerCase();
      url = url.concat(`&key=${apiKey}`);
    } else {
      alert("Please enter a book title.");
    }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((response_json) => {
        setData(response_json?.items);
      })
      .catch((error) => setData(null));
  }

  return (
    <button
      class="rounded bg-teal-900 font-body hover:bg-teal-700 duration-200 ease-in-out text-slate-50 ml-7 p-1.5 text-center py-2 my-2"
      onClick={submit}
    >
      Search
    </button>
  );
}
