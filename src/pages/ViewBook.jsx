import { useBooks } from "../context/BookContext";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewBook = () => {
  const books = useBooks();
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  useEffect(() => {
    setBook(books?.find((book) => book.id === Number(id)));
  }, [books, id]);

  return (
    <div>
      <div>
        <h1>View Book</h1>
      </div>
      <div>
        <table style={{ width: "500px" }}>
          <tr>
            <td>Title</td>
            <td>{book?.title}</td>
          </tr>
          <tr>
            <td>Author</td>
            <td>{book?.author}</td>
          </tr>
          <tr>
            <td>Publication Date</td>
            <td>{book?.publicationDate}</td>
          </tr>
          <tr>
            <td>Available copies</td>
            <td>{book?.availableCopies}</td>
          </tr>
        </table>
      </div>
      <div>
        <button onClick={() => navigate("/books")}>Books</button>
      </div>
    </div>
  );
};

export default ViewBook;
