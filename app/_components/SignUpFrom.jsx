"use client";
import React from "react";
import Input from "./Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { sendRequest } from "../services/sendRequest";
import toast from "react-hot-toast";

const notify = () => toast("Your Account is created Please sign in 😎");
function SignUpFrom() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    const newFormData = { ...data };
    newFormData[name] = value;
    setData(newFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await sendRequest(data, "/api/user/sign-up");

    if (res.status === 200) {
      notify();
      setTimeout(() => {
        router.push("/sign-in");
      }, "2000");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        required={true}
        type="text"
        name="name"
        id="name"
        placeholder="Max"
        value={data.name}
      >
        Name
      </Input>
      <Input
        required={true}
        type="email"
        name="email"
        id="email"
        placeholder="example@gmail.com"
        value={data.email}
        onChange={handleChange}
      >
        E-mail
      </Input>
      <Input
        required={true}
        type="password"
        name="password"
        id="password"
        placeholder="*****"
        value={data.password}
        onChange={handleChange}
      >
        Password
      </Input>
      <div className="flex gap-4 mt-4">
        <button className="p-3 transition-all bg-purple-600 rounded-sm basis-full hover:bg-purple-400 active:scale-[0.95] ">
          Signup
        </button>
      </div>
    </form>
  );
}

export default SignUpFrom;
