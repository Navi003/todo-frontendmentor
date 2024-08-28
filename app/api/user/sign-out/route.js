import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";

import jwt from "jsonwebtoken";

export const POST = async (request, response) => {
  // (request);

  const data = await request.json();

  const cookies = request.headers.get("cookie");
  const decodedTokenData = jwt.verify(token, "userToken");

  try {
    await connectToDb();

    const foundUser = await User.findOne({
      email: decodedTokenData.email,
    });

    const result = await foundUser.updateOne({
      $set: { todos: { items: data.todo } },
    });
    result;

    return Response.json({
      message: "sucess",
      status: 201,
    });
  } catch (error) {
    error;
    return Response.json({
      message: "fail",
      status: 450,
    });
  }
};
