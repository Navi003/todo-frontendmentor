"use client";
import { createContext, useState, useContext } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const initState = false;
  const [logedIn, setLogedIn] = useState(initState);
  const [user, setUser] = useState("");
  const [todo, setTodo] = useState([]);

  console.log(todo);

  return (
    <UserContext.Provider
      value={{ setLogedIn, logedIn, setUser, user, todo, setTodo }}
    >
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
