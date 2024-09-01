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
    const token = getAuthorizationToken("token");

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
