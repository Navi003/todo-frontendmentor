import React from "react";
import Input from "../_components/Input";

function page() {
  return (
    <form>
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
  );
}

export default page;
