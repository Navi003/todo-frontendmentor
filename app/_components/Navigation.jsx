import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <nav className="flex items-center justify-between gap-6 p-4 shadow-md backdrop-blur-sm bg-white/30">
      <Link href="/">Todo</Link>
      <div className="flex gap-5">
        <Link className=" text-neutral-50" href="sign-in">
          Sign In
        </Link>
        <Link className=" text-neutral-50" href="sign-up">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
