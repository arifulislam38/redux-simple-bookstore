import {
    ADDED_BOOKS,
    DELETE_BOOKS,
    FETCH_SINGLE_BOOK,
    LOADED_BOOKS,
    UPDATE_BOOKS
} from "./actionTypes";

export const loadedBooks = (books) => {
  return {
    type: LOADED_BOOKS,
    payload: books,
  };
};

export const addedBooks = (book) => {
  return {
    type: ADDED_BOOKS,
    payload: book,
  };
};

export const deleteBook = (id) => {
  return {
    type: DELETE_BOOKS,
    payload: id,
  };
};

export const updateBook = (id, data) => {
  return {
    type: UPDATE_BOOKS,
    payload: { id, data },
  };
};

export const getSingleBook = (data) => {
  return {
    type: FETCH_SINGLE_BOOK,
    payload: data,
  };
};
