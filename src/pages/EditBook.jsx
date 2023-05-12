import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useBooks, useSetBooks } from "../context/BookContext";

const EditBook = () => {
  const books = useBooks();
  const setBooks = useSetBooks();
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    publicationDate: "",
    availableCopies: "",
  });

  useEffect(() => {
    setBook(books?.find((book) => book.id === Number(id)));
  }, [books, id]);

  const handleChange = (event) => {
    setBook({
      ...book,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks(
      books?.map((oneBook) => {
        if (oneBook.id === Number(id)) {
          return {
            ...oneBook,
            title: book.title,
            author: book.author,
            publicationDate: book.publicationDate,
            availableCopies: book.availableCopies,
          };
        }
        return oneBook;
      })
    );
    navigate(`/books`);
  };

  return (
    <div>
      <div>
        <h1>Edit Book</h1>
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
          <button type="submit">Edit Book</button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
