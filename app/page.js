"use client";

import Image from "next/image";
import Heading from "./_components/Heading";
import { useState } from "react";
import Actions from "./_components/Actions";
import { useUser } from "./_components/userContext";

import { createMongoDBObjectId } from "@/app/lib/MongdId";

export default function Home() {
  const { setTodo, todo } = useUser();

  const [input, setInput] = useState("");
  // function getFilteredTodos() {
  //   (filter);
  //   if (filter === "active") {
  //     setFilteredTodos((state) => todo?.filter((todo) => !todo.completed));
  //   }
  //   if (filter === "completed") {
  //     setFilteredTodos((state) => todo?.filter((todo) => todo.completed));
  //   }
  //   setFilteredTodos(todo); // Show all todos
  // }

  function handleSubmit(e) {
    e.preventDefault();

    setTodo((state) => [
      ...state,
      {
        _id: createMongoDBObjectId(),
        text: input,
        active: true,
        completed: false,
      },
    ]);

    setInput("");
  }

  function handleDelete(id) {
    setTodo((state) => state.filter((todo) => todo._id !== id));
  }
  function handleCompleted(id) {
    setTodo((prevTodo) =>
      prevTodo.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  return (
    <main className="w-[360px] sm:w-[420px] md:w-[680px] l mx-auto  min-h-screen">
      <Heading />
      <form className="w-full mt-10 mb-6" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          className="w-full p-4 pl-16 font-light shadow-md bg-dark-very-dark-grayish-blue-2 text-dark-light-grayish-blue"
          required
        />
      </form>
      <div className="divide-y divide-neutral-dark-grayish-blue ">
        {todo?.map((todo) => {
          return (
            <div
              key={todo._id}
              className="flex justify-between w-full p-4 font-light bg-dark-very-dark-grayish-blue-2 text-dark-light-grayish-blue "
            >
              <p
                className={`flex items-center gap-4 ${
                  todo.completed && "line-through"
                }`}
              >
                <span
                  onClick={() => handleCompleted(todo._id)}
                  className="cursor-pointer w-[25px] h-[25px] flex items-center justify-center border-[.2px] rounded-full p-0.5"
                  style={{
                    background: `${
                      todo.completed
                        ? " linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
                        : "transparent"
                    }`,
                  }}
                >
                  {todo.completed && (
                    <Image
                      src="/images/icon-check.svg"
                      height={15}
                      width={15}
                      alt="Check"
                    />
                  )}
                </span>
                {todo.text}
              </p>
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(todo._id)}
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
        <Actions length={todo?.length} />
      </div>
    </main>
  );
}
