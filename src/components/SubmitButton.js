export default function SubmitButton({ title, author, setData }) {
  function submit(e) {
    e.preventDefault();
    const apiKey = `AIzaSyBZwU8jcrNehAMSx7zJo2_zie9RqaUMha4`;
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
      console.log("Please enter a title");
    }

    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((response_json) => {
        setData(response_json);
      })
      .catch((error) => setData(error));
  }

  return <button onClick={submit}>Search</button>;
}
