import { useState, createContext } from "react";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const URL = "http://localhost:8080/users";

  return (
    <UserContext.Provider value={{ users, setUsers, URL }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
