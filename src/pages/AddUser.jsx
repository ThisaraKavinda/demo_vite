import { useState } from "react";
import { useSetUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const setUsers = useSetUsers();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      borrowedBooks: [],
    };
    setUsers((users) => [...users, newUser]);
    navigate("/users");
  };

  return (
    <div>
      <div>
        <h1>Add User</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <table>
            <tr>
              <td>
                <label htmlFor="name">Name</label>
              </td>
              <td>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label htmlFor="email">Email</label>
              </td>
              <td>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <br />
            <tr>
              <td>
                <label htmlFor="phoneNumber">Phone number</label>
              </td>
              <td>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleChange}
                />
              </td>
            </tr>

            <br />
          </table>
          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
