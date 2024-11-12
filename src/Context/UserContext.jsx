import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [clientId, setClientId] = useState(localStorage.getItem("clientId"));

  const logout = () => {
    setUser(null);
    setToken("");
    setClientId("")
    localStorage.removeItem("token");
    navigate("signup")
  };

  const isAuthenticated = !!token;

  const updateClient = () => {
    setUser("client");
    localStorage.setItem("user", JSON.stringify("client")); // Store user in localStorage
  };

  const updateDesigner = () => {
    setUser("designer");
    localStorage.setItem("user", JSON.stringify("designer")); // Store user in localStorage
  };

  useEffect(() => {
    if (user !== null) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  const updateNewToken = (newToken) => {
    setToken(newToken);
    localStorage.setItem("token", newToken);
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
        logout,
        isAuthenticated,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
