import { useUsers, useSetUsers } from "../context/UserContext";
import { useBooks, useSetBooks } from "../context/BookContext";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ViewUser = () => {
  const users = useUsers();
  const books = useBooks();
  const setBooks = useSetBooks();
  const setUsers = useSetUsers();
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(users?.find((user) => user.id === Number(id)));
  }, [users, id]);

  const returnBookHandler = (bookID) => {
    setBooks(
      books?.map((oneBook) => {
        if (oneBook.id === Number(bookID)) {
          return {
            ...oneBook,
            availableCopies: oneBook.availableCopies + 1,
          };
        }
        return oneBook;
      })
    );
    setUsers(
      users?.map((oneUser) => {
        if (oneUser.id === Number(id)) {
          return {
            ...oneUser,
            borrowedBooks: oneUser.borrowedBooks?.filter(
              (book) => book.id !== Number(bookID)
            ),
          };
        }
        return oneUser;
      })
    );
  };

  return (
    <div>
      <div>
        <h1>View User</h1>
      </div>
      <div>
        <table style={{ width: "500px" }}>
          <tr>
            <td>Name</td>
            <td>{user?.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user?.email}</td>
          </tr>
          <tr>
            <td>Phone number</td>
            <td>{user?.phoneNumber}</td>
          </tr>
          <tr>
            <td>Borrowed Books</td>
            <div>
              {user?.borrowedBooks?.length ? (
                <ul>
                  {user?.borrowedBooks?.map((book) => (
                    <div key={book.id}>
                      <li>{book.title}</li>
                      <button onClick={() =>returnBookHandler(book.id)}>
                        Return Book
                      </button>
                    </div>
                  ))}
                </ul>
              ) : (
                <h6>No borrowed books</h6>
              )}
            </div>
          </tr>
        </table>
      </div>
      <div>
        <button onClick={() => navigate(`/borrowBook/${id}`)}>
          Borrow a Book
        </button>
      </div>
      <br />
      <div>
        <button onClick={() => navigate("/users")}>Users</button>
      </div>
    </div>
  );
};

export default ViewUser;
