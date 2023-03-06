import { useState, createContext } from "react";

const UserRoleContext = createContext(null);

const UserRoleContextProvider = ({ children }) => {
  const [userRole, setUserRole] = useState([]);
  const URL = "http://localhost:8080/user-roles";

  return (
    <UserRoleContext.Provider value={{ userRole, setUserRole, URL }}>
      {children}
    </UserRoleContext.Provider>
  );
};

export { UserRoleContext, UserRoleContextProvider };
