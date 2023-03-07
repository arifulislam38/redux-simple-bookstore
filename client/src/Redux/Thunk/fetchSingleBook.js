const fetchSingleBook = (id, setFetchSingleBook) => {
  return async () => {
    const res = await fetch(`http://localhost:9000/books/${id}`);
    const book = await res.json();
    setFetchSingleBook(book)
  };
};
export default fetchSingleBook;
