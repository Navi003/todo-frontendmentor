"use client";
import Image from "next/image";
import Heading from "./_components/Heading";
import { useState, useEffect } from "react";
import Actions from "./_components/Actions";
import { createMongoDBObjectId } from "@/app/lib/MongdId";
import { useUser } from "./_components/userContext";
import { addTodo, getTodos } from "./services/localstorageAPI";

export default function Home() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { todo, setTodo, user } = useUser();

  useEffect(() => {
    if (!user) {
      const savedTodos = JSON.parse(localStorage.getItem("localTodos")) || [];
      setTodo(savedTodos);
    }
  }, [user]);

  useEffect(() => {
    if (filter === "all") {
      setFilteredTodos(todo);
    } else if (filter === "active") {
      setFilteredTodos(todo.filter((todo) => !todo.completed));
    } else if (filter === "completed") {
      setFilteredTodos(todo.filter((todo) => todo.completed));
    }
  }, [filter, todo]);

  useEffect(() => {
    if (!user) {
      localStorage.setItem("localTodos", JSON.stringify(todo));
    }
  }, [todo, user]);

  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      _id: createMongoDBObjectId(),
      text: input,
      active: true,
      completed: false,
    };

    setTodo((prev) => [...prev, newTodo]);

    setInput("");
  }

  function handleDelete(id) {
    setTodo((prev) => prev.filter((todo) => todo._id !== id));
  }

  function handleCompleted(id) {
    setTodo((prev) =>
      prev.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function clearCompleted() {
    setTodo((prev) => prev.filter((todo) => !todo.completed));
  }

  return (
    <main className="w-[360px] sm:w-[420px] md:w-[680px] mx-auto min-h-screen">
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
      <div className="divide-y divide-neutral-dark-grayish-blue">
        {filteredTodos.map((todo) => (
          <div
            key={todo._id}
            className="flex justify-between w-full p-4 font-light bg-dark-very-dark-grayish-blue-2 text-dark-light-grayish-blue"
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
                      ? "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
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
        ))}
        <Actions
          length={filteredTodos.length}
          setFilter={setFilter}
          clearCompleted={clearCompleted}
        />
      </div>
    </main>
  );
}
