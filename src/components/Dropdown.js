import BookList from "./BookList";
import { useState } from "react";
import { NYT_API_KEY } from "../apiKeys";

export default function Dropdown({ categoryList, dropdownPurpose, idName }) {
  const apiKey = NYT_API_KEY;
  let [currentBest, setCurrentBest] = useState();

  function getSelection(event) {
    let selectedElement = document.getElementById(idName)?.value;

    let base_url = `https://api.nytimes.com/svc/books/v3/lists/current/${selectedElement}.json?api-key=`;

    // https://stackoverflow.com/a/1983661
    let url = base_url.replace(/\s+/g, "-").toLowerCase();
    url = url + apiKey;
    fetch(url)
      .then((response) => response?.json())
      .then((response_json) => {
        setCurrentBest(response_json.results.books);
      })
      .catch((error) => setCurrentBest(error));
  }

  return (
    <div class="p-7 pt-3 pb-0">
      <label
        class="font-body text-teal-600 pr-3 pl-0"
        htmlFor={dropdownPurpose}
      >
        {dropdownPurpose}
      </label>
      <select
        class="font-body rounded-lg p-1 hover:bg-teal-700 ease-in-out duration-150 bg-teal-900 text-slate-50 text-base focus:bg-teal-200 focus:text-teal-900"
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
