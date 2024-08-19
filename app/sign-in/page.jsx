import React from "react";
import Input from "../_components/Input";
import Link from "next/link";

function page() {
  return (
    <form>
      <Input
        required={true}
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
      >
        E-Mail
      </Input>
      <Input
        required={true}
        type="password"
        name="password"
        id="password"
        placeholder="*****"
      >
        Password
      </Input>
      <div className="flex gap-4 mt-4">
        <button className="p-3 transition-all bg-purple-600 rounded-sm basis-full hover:bg-purple-400 active:scale-[0.95] ">
          Sign in
        </button>
      </div>
      <Link
        className="block mt-3 text-center underline text-dark-light-grayish-blue hover:text-dark-light-grayish-blue-hover"
        href="/sign-up"
      >
        dont have an account ?.
      </Link>
    </form>
  );
}

export default page;
