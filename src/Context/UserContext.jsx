import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const updateClient = () => {
    setUser("client");
  };

  const updateDesigner = () => {
    setUser("designer");
  };

  return (
    <UserContext.Provider
      value={{
        updateClient,
        updateDesigner,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
