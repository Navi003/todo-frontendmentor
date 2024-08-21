"use client";
import Link from "next/link";
import React from "react";
import { useUser } from "./userContext";

function Navigation() {
  const { user, logout } = useUser();

  console.log(user);

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
        <span>Sign-out</span>
      )}
    </nav>
  );
}

export default Navigation;
