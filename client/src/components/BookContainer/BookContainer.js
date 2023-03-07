import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProduct from "../../Redux/Thunk/fetchBooks";
import BookCard from "../BookCard/BookCard";

const BookContainer = ({setFetchSingleBook}) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <div class="lws-bookContainer">
      {books
        .filter((book) => {
          if (filter.featureStatus) {
            return book.featured;
          } else {
            return book;
          }
        })
        .filter((book) => {
          if (filter.searchKeyword) {
            return book.name
              .toLowerCase()
              .includes(filter.searchKeyword.toLowerCase());
          }
          return book;
        })
        .map((book) => (
          <BookCard book={book} setFetchSingleBook={setFetchSingleBook} />
        ))}
    </div>
  );
};

export default BookContainer;
