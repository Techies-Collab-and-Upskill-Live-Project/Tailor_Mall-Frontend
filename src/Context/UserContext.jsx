import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [clientId, setClientId] = useState(
    localStorage.getItem("clientId") || null
  );

  //   let user;
  // try {
  //   user = JSON.parse(someData);  // Attempt to parse the JSON string
  // } catch (error) {
  //   console.error("Invalid JSON data:", error);
  //   user = null;  // Set user to null or some default value if parsing fails
  // }

  const updateClient = () => {
    setUser("client");
  };

  const updateDesigner = () => {
    setUser("designer");
  };

  const updateNewToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken); // Optionally persist the token
  };
  const updateClientId = (newClientId) => {
    setClientId(newClientId);
    localStorage.setItem("clientId", newClientId); // Store clientId in localStorage
  };

  return (
    <UserContext.Provider
      value={{
        updateClient,
        updateDesigner,
        user,
        updateNewToken,
        token,
        clientId,
        updateClientId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
