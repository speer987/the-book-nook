import BookList from "./BookList";
import { useState } from "react";

export default function Dropdown({ categoryList, dropdownPurpose, idName }) {
  const apiKey = `LrgMgEJkKjWGZ5zXLBAd3voRBfD2s6aD`;
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
    <div>
      <label htmlFor={dropdownPurpose}>{dropdownPurpose}</label>
      <select
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
