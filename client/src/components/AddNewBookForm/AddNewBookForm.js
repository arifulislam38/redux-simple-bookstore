import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import addBooks from "../../Redux/Thunk/addBooks";
import updateBooks from "../../Redux/Thunk/updateBooks";

const AddNewBookForm = ({ fetchSingleBook, setFetchSingleBook }) => {
  const { name, author, thumbnail, price, rating, id, featured } =
    fetchSingleBook;

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(addBooks(data));
    reset();
  };

  const handleUpdate = (data) => {
    const newData = {
      ...data,
      id,
      name: data.name || name,
      author: data.author || author,
      thumbnail: data.thumbnail || thumbnail,
      price: data.price || price,
      rating: data.rating || rating,
      featured: data.featured,
    };

    dispatch(updateBooks(id, newData));
    setFetchSingleBook({});
    reset();
  };

  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      {name ? (
        <form onSubmit={handleSubmit(handleUpdate)} className="book-form">
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              defaultValue={name}
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              {...register("name")}
            />
          </div>

          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              defaultValue={author}
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              {...register("author")}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              defaultValue={thumbnail}
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              {...register("thumbnail")}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                defaultValue={price}
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                {...register("price")}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                defaultValue={rating}
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                {...register("rating")}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              defaultChecked={featured}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              {...register("featured")}
            />
            <label for="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Update Book
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="book-form">
          <div className="space-y-2">
            <label for="name">Book Name</label>
            <input
              required
              defaultValue=""
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              {...register("name")}
            />
          </div>

          <div className="space-y-2">
            <label for="category">Author</label>
            <input
              required
              defaultValue=""
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              {...register("author")}
            />
          </div>

          <div className="space-y-2">
            <label for="image">Image Url</label>
            <input
              required
              defaultValue=""
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              {...register("thumbnail")}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label for="price">Price</label>
              <input
                required
                defaultValue=""
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                {...register("price")}
              />
            </div>

            <div className="space-y-2">
              <label for="quantity">Rating</label>
              <input
                required
                defaultValue=""
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                min="1"
                max="5"
                {...register("rating")}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              defaultChecked={false}
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              className="w-4 h-4"
              {...register("featured")}
            />
            <label for="featured" className="ml-2 text-sm">
              This is a featured book
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            Add Book
          </button>
        </form>
      )}
    </div>
  );
};

export default AddNewBookForm;
