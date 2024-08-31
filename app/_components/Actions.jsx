"use client";
import React from "react";
import { useUser } from "./userContext";

function Actions({ setFilter }) {
  const { todo, setTodo } = useUser();

  function clearCompleted() {
    setTodo((prev) => prev.filter((todo) => !todo.completed));
  }

  return (
    <div className="flex justify-between p-4 text-xs rounded-b-md bg-dark-very-dark-grayish-blue-2 text-dark-dark-grayish-blue sm:text-sm md:text-base">
      <div className="hover:text-dark-light-grayish-blue-hover">
        {todo.length} Items left{" "}
      </div>
      <div className="flex gap-1 cursor-pointer sm:space-x-3">
        <div
          onClick={() => setFilter("all")}
          className="hover:text-dark-light-grayish-blue-hover"
        >
          All
        </div>
        <span
          onClick={() => setFilter("active")}
          className="hover:text-dark-light-grayish-blue-hover"
        >
          Active
        </span>
        <span
          className="hover:text-dark-light-grayish-blue-hover"
          onClick={() => setFilter("completed")}
        >
          Completed
        </span>
      </div>
      <div
        onClick={clearCompleted}
        className="cursor-pointer hover:text-dark-light-grayish-blue-hover"
      >
        Clear Completed
      </div>
    </div>
  );
}

export default Actions;
