import { useBooks, useSetBooks } from "../context/BookContext";
import { useSetUsers, useUsers } from "../context/UserContext";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";

const BorrowBook = () => {
  const books = useBooks();
  const users = useUsers();
  const setBooks = useSetBooks();
  const setUsers = useSetUsers();
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState(
    users.find((user) => user.id === Number(id))
  );

  useEffect(() => {
    setUser(users.find((user) => user.id === Number(id)));
  }, [id, users]);

  //   console.log(books);

  const borrowBookHandler = useCallback(
    async (bookID) => {
      const book = books.find((book) => book.id === Number(bookID));
      console.log(book.availableCopies);
      await setBooks(
        books?.map((oneBook) => {
          if (oneBook.id === Number(bookID)) {
            return {
              ...oneBook,
              availableCopies: book.availableCopies - 1,
            };
          }
          return oneBook;
        })
      );
      await setUsers(
        users?.map((oneUser) => {
          if (oneUser.id === Number(id)) {          
            return {
              ...oneUser,
              borrowedBooks: [
                ...oneUser.borrowedBooks,
                { id: book.id, title: book.title },
              ],
            };
          }
          return oneUser;
        })
      );
        navigate("/");
    },
    [id, users, books, navigate, setBooks, setUsers]
  );

  return (
    <div>
      <div>
        <h1>Borrow a Book</h1>
      </div>
      <div>
        {books.length ? (
          <table>
            {books.map((book) => (
              <ul key={book?.id}>
                <td>{book?.title}</td>
                <td>
                  <button
                    onClick={() => borrowBookHandler(book?.id)}
                    disabled={
                      book.availableCopies < 1
                        ||
                        user?.borrowedBooks?.find((b) => book?.id === b.id)
                    }
                  >
                    Borrow
                  </button>
                </td>
              </ul>
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
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default BorrowBook;
