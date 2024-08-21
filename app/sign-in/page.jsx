"use client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Input from "../_components/Input";
import { sendRequest } from "@/app/services/sendRequest";
import Link from "next/link";
import { useUser } from "../_components/userContext";
function Page() {
  const { setUser } = useUser();

  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target[0]);
    const email = e.target[0].value;
    const password = e.target[1].value;
    // console.log(e.target[0]);

    setData({
      email,
      password,
    });
    const res = await sendRequest(data, "/api/user/sign-in");
    const userData = await res.json();

    if (res.status === 200) {
      console.log(userData.data);
      setUser(userData.data);
      router.push("/");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
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

export default Page;
