import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";
import { ObjectId } from "mongodb";
// import { checkUser } from "@/lib/hashPassword";
// import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const POST = async (request, response) => {
  // (request);

  const data = await request.json();
  const decodedTokenData = jwt.verify(data.token, "userToken");
  console.log(data);

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
