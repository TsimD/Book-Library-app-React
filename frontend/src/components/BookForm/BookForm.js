import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/books/actionCreators";
import s from "./BookForm.module.css";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const book = {
        title,
        author,
      };

      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
  };
  return (
    <div className={s.book_form}>
      <h2 className={s.title}>Add new book</h2>
      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.title_input}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={s.autor_input}>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button className={s.btn} type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
