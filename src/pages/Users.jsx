import { useUsers, useSetUsers } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const users = useUsers();
  const setUsers = useSetUsers();
  const navigate = useNavigate();

  const onDeleteHandler = (id) => {
    setUsers((users) => users.filter((user) => user.id !== Number(id)));
  };

  return (
    <div>
      <h1>Users</h1>
      <div>
        {users.length ? (
          <table>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Actions</th>
            </tr>
            {users.map((user) => (
              <tr key={user?.id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.phoneNumber}</td>
                <td>
                  <button onClick={() => navigate(`/viewUser/${user.id}`)}>
                    View
                  </button>
                  <button onClick={() => navigate(`/editUser/${user.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => onDeleteHandler(user.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </table>
        ) : (
          <div>
            <h5>No Users to show</h5>
          </div>
        )}
      </div>
      <br></br>
      <div>
        <button
          onClick={() => navigate("/addUser")}
          style={{ marginRight: "20px" }}
        >
          Add User
        </button>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default Users;
