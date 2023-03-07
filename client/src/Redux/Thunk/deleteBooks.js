import { deleteBook } from "../Books/action";
const deleteBooks = (id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:9000/books/${id}`, {
      method: "DELETE",
    });
    dispatch(deleteBook(id));
  };
};

export default deleteBooks;
