import { useState } from "react";
import { useSetBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const setBooks = useSetBooks();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publicationDate: "",
    availableCopies: "",
  });

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title: book.title,
      author: book.author,
      publicationDate: book.publicationDate,
      availableCopies: book.availableCopies,
    };
    setBooks((books) => [...books, newBook]);
    setBook({
      title: "",
      author: "",
      publicationDate: "",
      availableCopies: "",
    });
    navigate("/books");
  };

  return (
    <div>
      <div>
        <h1>Add Book</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="title">Title</label>
              </td>
              <td>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={book.title}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label htmlFor="author">Author</label>
              </td>
              <td>
                <input
                  type="text"
                  id="author"
                  name="author"
                  value={book.author}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label htmlFor="publicationDate">Publication Date</label>
              </td>
              <td>
                <input
                  type="date"
                  id="publicationDate"
                  name="publicationDate"
                  value={book.publicationDate}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <br />
            <tr>
              <td>
                <label htmlFor="availableCopies">No of copies</label>
              </td>
              <td>
                {" "}
                <input
                  type="number"
                  id="availableCopies"
                  name="availableCopies"
                  value={book.availableCopies}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <br />
          </table>
          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
