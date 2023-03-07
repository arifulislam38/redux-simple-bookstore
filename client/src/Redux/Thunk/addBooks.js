import { addedBooks } from "../Books/action";

const addBooks = (book) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:9000/books", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = await res.json();

    dispatch(addedBooks(data));
  };
};

export default addBooks;
