import { useBooks } from "../context/BookContext";
import { useUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const books = useBooks();
  const users = useUsers();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Books</h2>
        <div>
          {books?.length ? (
            <ul>
              {books?.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          ) : (
            <div>
              <h5>No Books to show</h5>
            </div>
          )}

          <div>
            <button onClick={() => navigate("/books")}>View Books</button>
          </div>
        </div>
      </div>
      <div>
        <h2>Users</h2>
        <div>
        {users?.length ? (
            <ul>
              {users?.map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          ) : (
            <div>
              <h5>No Users to show</h5>
            </div>
          )}
          <div>
            <button onClick={() => navigate("/users")}>View Users</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
