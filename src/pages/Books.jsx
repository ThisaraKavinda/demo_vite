import { useBooks, useSetBooks } from "../context/BookContext";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const books = useBooks();
  const setBooks = useSetBooks();
  const navigate = useNavigate();

  const onDeleteHandler = (id) => {
    setBooks((books) => books.filter((book) => book.id !== Number(id)));
  };

  return (
    <div>
      <h1>Books</h1>
      <div>
        {books.length ? (
          <table>
            <tr>
              <th>Title</th>
              <th>Authur</th>
              <th>Available copies</th>
              <th>Actions</th>
            </tr>
            {books.map((book) => (
              <tr key={book?.id}>
                <td>{book?.title}</td>
                <td>{book?.author}</td>
                <td>{book?.availableCopies}</td>
                <td>
                  <button onClick={() => navigate(`/viewBook/${book.id}`)}>
                    View
                  </button>
                  <button onClick={() => navigate(`/editBook/${book.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => onDeleteHandler(book.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <div>
            <h5>No books to show</h5>
          </div>
        )}
      </div>
      <br></br>
      <div>
        <button
          onClick={() => navigate("/addBook")}
          style={{ marginRight: "20px" }}
        >
          Add Book
        </button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default Books;
