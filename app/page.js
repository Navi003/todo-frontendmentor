"use client";
import Heading from "./_components/Heading";
import { useState, useEffect } from "react";
import Actions from "./_components/Actions";
import { createMongoDBObjectId } from "@/app/lib/MongdId";
import { useUser } from "./_components/userContext";

import TodoItem from "./_components/TodoItem";
import { sendRequest } from "./services/sendRequest";
import storeDataInLocalStorage from "./lib/storeInlocalStorage";
import { useRouter } from "next/navigation";
import { addTodo } from "./services/localstorageAPI";

export default function Home() {
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const { todo, setTodo, user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (user) return;
      const token = JSON.parse(localStorage.getItem("token"));

      if (token) {
        const res = await sendRequest(null, "/api/user/sign-in-token", token);
        const userData = await res.json();

        storeDataInLocalStorage("token", userData.Authorization);
        setUser(userData.data);
        setTodo(userData.data.todos.items);
        addTodo(userData.data.todos.items);

        router.push("/");
      }
    };
    fetchData();
  }, []);

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
      <ul className="divide-y divide-neutral-dark-grayish-blue">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} setTodo={setTodo} />
        ))}
        <Actions length={filteredTodos.length} setFilter={setFilter} />
      </ul>
    </main>
  );
}
