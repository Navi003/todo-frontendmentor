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
      email: data.email,
    });
    console.log(foundUser);
    if (foundUser.password === data.password) {
      return Response.json({
        message: "sucess",
        status: 200,
        data: foundUser,
      });
    }

    console.log(match);
  } catch (error) {
    console.log(error);
    return Response.json({
      message: "fail",
      status: 450,
    });
  }
};
