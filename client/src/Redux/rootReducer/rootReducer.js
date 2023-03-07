import { combineReducers } from "redux";
import booksReducer from "../Books/booksReducer";
import filterReducer from "../Filter/filterReducer";

export const rootReducer = combineReducers({
  filter: filterReducer,
  books: booksReducer
});
