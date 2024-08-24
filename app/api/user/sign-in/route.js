import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";
// import { checkUser } from "@/lib/hashPassword";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";
export const POST = async (request, response) => {
  const data = await request.json();

  try {
    await connectToDb();

    const foundUser = await User.findOne({
      email: data.email,
    });

    const jwtToken = jwt.sign(
      {
        email: foundUser.email,
        password: foundUser.password,
      },
      "userToken"
    );

    if (foundUser.password === data.password) {
      return Response.json({
        message: "sucess",
        status: 200,
        data: {
          todos: foundUser.todos,
          name: foundUser.name,
          token: jwtToken,
        },
      });
    }
  } catch (error) {
    error;
    return Response.json({
      message: "Credintials not matched",
      status: 404,
    });
  }
};
