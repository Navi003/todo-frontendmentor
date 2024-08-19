import React from "react";

function Input({
  required = false,
  type = "text",
  name,
  id,
  children,
  placeholder,
  className,
  onChange,
}) {
  return (
    <div className="mt-4">
      <label
        htmlFor={id}
        className={`${className} text-sm font-medium tracking-wide text-dark-light-grayish-blue`}
      >
        {children}
      </label>
      <input
        className="w-full p-3 mt-1 rounded text-neutral-very-light-gray bg-dark-dark-grayish-blue placeholder:text-dark-light-grayish-blue focus:bg-dark-very-dark-blue "
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
