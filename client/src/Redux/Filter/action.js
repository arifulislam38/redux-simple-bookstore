import { ALL_BOOK, APPLY_SEARCH, FEATURED_BOOK } from "./actionTypes";

export const featuredBook = () => {
  return {
    type: FEATURED_BOOK,
  };
};

export const allBook = () => {
  return {
    type: ALL_BOOK,
  };
};

export const applySearch = (text) => {
  return {
    type: APPLY_SEARCH,
    payload: text,
  };
};
