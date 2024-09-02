import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";

import jwt from "jsonwebtoken";

import bcrypt from "bcrypt";
export const POST = async (request, response) => {
  const data = await request.json();
  const { email, password } = data.data;

  try {
    const foundUser = await User.findOne({ email });
    const match = await bcrypt.compare(password, foundUser.password);

    if (match) {
      const jwtToken = jwt.sign(
        {
          email,
          password: foundUser.password,
        },
        "userToken"
      );

      return Response.json({
        message: "sucess",
        status: 200,
        data: {
          todos: foundUser.todos,
          name: foundUser.name,
        },
        Authorization: jwtToken,
      });
    } else {
      throw "Something went wrong please check username and password";
    }
  } catch (error) {
    return Response.json({
      message: error.message,
      status: 404,
    });
  }
};
