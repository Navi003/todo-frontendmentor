"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "./userContext";
import { sendRequest } from "../services/sendRequest";
import { getAuthorizationToken } from "../lib/storeInlocalStorage";
import { clearStorage } from "../services/localstorageAPI";

function Navigation() {
  const { user, todo, setTodo, setUser } = useUser();

  async function handleSignOut() {
    // const storedUser = JSON.parse(localStorage.getItem("userToken"));
    // const storedTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(user);
    // This needs to be changed in future where we will simply take all the data from local storage and send it as one object with token.
    //or we can save token in headears and take it out from user object in local storage
    const token = getAuthorizationToken("token");
    console.log(todo);
    await sendRequest(todo, "/api/user/sign-out", token);

    setTodo([]);
    setUser("");

    clearStorage("todo");
    clearStorage("token");
  }

  return (
    <nav className="flex items-center justify-between gap-6 p-4 shadow-md backdrop-blur-sm bg-white/30">
      {user && (
        <Link href="/">{`Welcome ${user.name} to your Todos ${"😍"}`}</Link>
      )}
      {!user && <Link href="/">Todo</Link>}
      {!user ? (
        <div className="flex gap-5">
          <Link className=" text-neutral-50" href="sign-in">
            Sign In
          </Link>
          <Link className=" text-neutral-50" href="sign-up">
            Sign Up
          </Link>
        </div>
      ) : (
        <span
          className="cursor-pointer text-neutral-200"
          onClick={handleSignOut}
        >
          Sign-Out
        </span>
      )}
    </nav>
  );
}

export default Navigation;
