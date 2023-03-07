import React, { useState } from "react";
import AddNewBookForm from "../AddNewBookForm/AddNewBookForm";
import BookContainer from "../BookContainer/BookContainer";
import FilterHeader from "../FilterHeader/FilterHeader";
import Navbar from "../Navbar/Navbar";

const BookSiteContainer = () => {
  const [fetchSingleBook, setFetchSingleBook] = useState({});
  return (
    <body>
      <Navbar />

      <main class="py-12 2xl:px-6">
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <div class="order-2 xl:-order-1">
            <FilterHeader />
            <BookContainer setFetchSingleBook={setFetchSingleBook} />
          </div>
          <div>
            <AddNewBookForm
              setFetchSingleBook={setFetchSingleBook}
              fetchSingleBook={fetchSingleBook}
            />
          </div>
        </div>
      </main>
    </body>
  );
};

export default BookSiteContainer;
