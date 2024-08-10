"use client";

import Image from "next/image";
import Heading from "./_components/Heading";
import { useState } from "react";
import Actions from "./_components/Actions";

/* 
      "check-background":
        "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
*/

export default function Home() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setTodo((state) => [
      ...state,
      { id: Math.random(), comment: input, active: true, complete: false },
    ]);
  }

  function handleDelete(id) {
    setTodo((state) => state.filter((todo) => todo.id !== id));
  }

  return (
    <main className="w-[600px] mx-auto  min-h-screen">
      <Heading />
      <form className="w-full mt-10 mb-10" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-4 pl-16 font-light shadow-md bg-dark-very-dark-grayish-blue-2 text-dark-light-grayish-blue"
        />
      </form>
      <div className="divide-y divide-neutral-dark-grayish-blue ">
        {todo.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex justify-between w-full p-4 font-light bg-dark-very-dark-grayish-blue-2 text-dark-light-grayish-blue "
            >
              <p className="flex items-center gap-4">
                <span
                  className="cursor-pointer w-[25px] h-[25px] flex items-center justify-center border-[.2px] rounded-full p-0.5"
                  style={{
                    background:
                      "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
                  }}
                >
                  <Image
                    src="/images/icon-check.svg"
                    height={15}
                    width={15}
                    alt="Check"
                  />
                </span>
                {todo.comment}
              </p>
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(todo.id)}
              >
                <Image
                  height={25}
                  width={25}
                  src="/images/icon-cross.svg"
                  alt="delete Todo Icon"
                />
              </span>
            </div>
          );
        })}
        <Actions length={todo.length} />
      </div>
    </main>
  );
}
