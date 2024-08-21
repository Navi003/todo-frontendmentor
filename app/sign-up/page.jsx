"use client";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Input from "../_components/Input";
import { sendRequest } from "@/app/services/sendRequest";

const notify = () => toast("Your Account is created Please sign in 😎");
function Page() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    setData({
      name,
      email,
      password,
    });
    const res = await sendRequest(data, "/api/user/sign-up");

    if (res.status === 200) {
      notify();
      setTimeout(() => {
        router.push("/sign-in");
      }, "2000");
    }
  }

  return (
    <>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <Input
          required={true}
          type="text"
          name="name"
          id="name"
          placeholder="Max"
        >
          Name
        </Input>
        <Input
          required={true}
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
        >
          E-mail
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
            Signup
          </button>
        </div>
      </form>
    </>
  );
}

export default Page;
