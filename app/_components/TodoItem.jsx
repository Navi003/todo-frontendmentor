import Image from "next/image";
import React from "react";

function TodoItem({ todo, setTodo }) {
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

  return (
    <li
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
      <span className="cursor-pointer" onClick={() => handleDelete(todo._id)}>
        <Image
          height={25}
          width={25}
          src="/images/icon-cross.svg"
          alt="delete Todo Icon"
        />
      </span>
    </li>
  );
}

export default TodoItem;
