import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";
// import { checkUser } from "@/lib/hashPassword";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";

export const POST = async (request, response) => {
  const data = await request.json();

  console.log(data);

  try {
    await connectToDb();

    const foundUser = await User.findOne({
      email: "dhimannavjot1@gmail.com",
    });

    const result = await foundUser.updateOne(
      { $set: { todos: { items: data } } } // Replace the todos array
    );
    console.log(result);

    return Response.json({
      message: "sucess",
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "fail",
      status: 450,
    });
  }
};
