import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";
// import { checkUser } from "@/lib/hashPassword";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";
export const POST = async (request, response) => {
  const data = await request.json();
  const { email, password } = data.data;

  try {
    const x = await connectToDb();

    console.log(x);

    const foundUser = await User.findOne({ email });

    const jwtToken = jwt.sign(
      {
        email,
        password,
      },
      "userToken"
    );

    if (foundUser.password === password) {
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
      throw "Something went wront please check username and password";
    }
  } catch (error) {
    return Response.json({
      message: error.message,
      status: 404,
    });
  }
};
