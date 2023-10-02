import BookCoverContainer from "./BookCoverContainer";

export default function Dropdown({ list, purpose, idName }) {
  // Got help for finding selection from the following:
  // https://www.geeksforgeeks.org/how-to-get-selected-value-in-dropdown-list-using-javascript/

  // function getSelection() {
  //   const selectedElement = document.querySelector({ idName }).value;
  //   BookCoverContainer(bookList);
  // }

  // function getAPICall() {
  //   useEffect(() => {
  //   const url =
  //     `https://api.nytimes.com/svc/books/v3/lists/current/${dummyList}.json?api-key=` +
  //     apiKey;
  //   console.log(url);
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((response) => setCurrentBest(response))
  //     .catch((error) => setCurrentBest(error));
  // }, []);
  //   const bookList = currentBest?.results?.books;
  // }

  // function displayBooks() {}

  return (
    <div>
      <label for={purpose}>{purpose}</label>
      <select name={purpose} id={idName}>
        {list?.map((purpose) => (
          <option onclick={getSelection()} key={purpose} value={purpose}>
            {purpose}
          </option>
        ))}
      </select>
    </div>
  );
}
