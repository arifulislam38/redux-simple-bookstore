import { updateBook } from "../Books/action";

const updateBooks = (id, book) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(book),
    });
    const data = res.json()
    dispatch(updateBook(id, book))
  };
};

export default updateBooks;
