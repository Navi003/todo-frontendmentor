"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Input from "../_components/Input";
import { sendRequest } from "@/app/services/sendRequest";
import Link from "next/link";
import { useUser } from "../_components/userContext";
function SignForm() {
  const { setUser, setTodo } = useUser();

  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(name);
    const newFormData = { ...data };
    newFormData[name] = value;
    console.log(data);
    setData(newFormData);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log(data);

    const res = await sendRequest(data, "/api/user/sign-in");
    const userData = await res.json();
    console.log(userData);
    if (res.status === 200) {
      setUser(userData.data);
      setTodo(userData.data.todos.items);

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
        value={data.email}
        onChange={handleChange}
      >
        E-Mail
      </Input>
      <Input
        required={true}
        type="password"
        name="password"
        id="password"
        placeholder="*****"
        onChange={handleChange}
        value={data.password}
      >
        Password
      </Input>
      <div className="flex gap-4 mt-4">
        <button className="p-3 transition-all bg-purple-600 rounded-sm basis-full hover:bg-purple-400 active:scale-[0.95] ">
          Sign in
        </button>
      </div>
    </form>
  );
}

export default SignForm;
