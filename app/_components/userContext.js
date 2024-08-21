"use client";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const initState = false;

function UserProvider({ children }) {
  const [logedIn, setLogedIn] = useState(initState);
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ setLogedIn, logedIn, setUser, user }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserContext);

  if (context === undefined)
    throw new Error("Context was used outside Provider");

  return context;
}

export { UserProvider, useUser };
