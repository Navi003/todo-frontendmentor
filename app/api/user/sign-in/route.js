import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";
// import { checkUser } from "@/lib/hashPassword";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export const POST = async (request, response) => {
  const data = await request.json();

  const res = NextResponse.next();
  try {
    await connectToDb();

    const foundUser = await User.findOne({
      email: data.email,
    });

    // console.log(foundUser);

    console.log(data.password);
    const jwtToken = jwt.sign(
      {
        email: foundUser.email,
        password: foundUser.password,
      },
      "userToken"
    );

    if (foundUser.password === data.password) {
      res.cookies.set("Authorization", `Bearer ${jwtToken}`);
      return Response.json({
        message: "sucess",
        status: 200,
        data: {
          todos: foundUser.todos,
          name: foundUser.name,
        },
      });
    }
  } catch (error) {
    console.log(error.message);
    return Response.json({
      message: "Credintials not matched",
      status: 404,
    });
  }
};
