import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useUsers, useSetUsers } from "../context/UserContext";

const EditUser = () => {
  const users = useUsers();
  const setUsers = useSetUsers();
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  useEffect(() => {
    setUser(users?.find((user) => user.id === Number(id)));
  }, [users, id]);

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers(
      users?.map((oneUser) => {
        if (oneUser.id === Number(id)) {
          return {
            ...oneUser,
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
          };
        }
        return oneUser;
      })
    );
    navigate(`/users`);
  };

  return (
    <div>
      <div>
        <h1>Edit User</h1>
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
          <button type="submit">Edit User</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
