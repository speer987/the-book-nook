import BookList from "./BookList";
import { useState } from "react";
import { NYT_API_KEY } from "../apiKeys";

export default function Dropdown({ categoryList, dropdownPurpose, idName }) {
  const apiKey = NYT_API_KEY;
  let [currentBest, setCurrentBest] = useState();

  function getSelection(event) {
    let selectedElement = document.getElementById(idName)?.value;
    console.log("se: ", selectedElement);

    let base_url = `https://api.nytimes.com/svc/books/v3/lists/current/${selectedElement}.json?api-key=`;

    // https://stackoverflow.com/a/1983661
    let url = base_url.replace(/\s+/g, "-").toLowerCase();
    url = url + apiKey;
    fetch(url)
      .then((response) => response?.json())
      .then((response_json) => {
        setCurrentBest(response_json.results.books);
        console.log(response_json.results);
      })
      .catch((error) => setCurrentBest(error));
  }

  return (
    <div class="py-5">
      <label
        class="font-body text-teal-600 m-0 pr-3 pl-0"
        htmlFor={dropdownPurpose}
      >
        {dropdownPurpose}
      </label>
      <select
        class="font-body rounded-full p-1 bg-teal-900 text-slate-50 text-base"
        onChange={(event) => getSelection(event)}
        name={dropdownPurpose}
        id={idName}
      >
        {categoryList?.map((genreName, index) => (
          <option key={index} value={genreName}>
            {genreName}
          </option>
        ))}
      </select>
      {currentBest && <BookList bookList={currentBest} />}
    </div>
  );
}
