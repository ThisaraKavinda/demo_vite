import React, { useState, useContext } from "react";

const UsersContext = React.createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

const useUsers = () => {
  const { users } = useContext(UsersContext);
  return users;
};

const useSetUsers = () => {
  const { setUsers } = useContext(UsersContext);
  return setUsers;
};

export { UsersProvider, useUsers, useSetUsers };