import {
    ADDED_BOOKS,
    DELETE_BOOKS,
    LOADED_BOOKS,
    UPDATE_BOOKS
} from "./actionTypes";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED_BOOKS:
      return action.payload;

    case ADDED_BOOKS:
      return [...state, action.payload];

    case DELETE_BOOKS:
      return state.filter((book) => book.id !== action.payload);

    case UPDATE_BOOKS:
      return state.map((book) => {
        if (book.id === action.payload.id) {
          return action.payload.data;
        }
        return book;
      });
    default:
      return state;
  }
};

export default booksReducer;
