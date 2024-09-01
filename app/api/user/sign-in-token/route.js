import User from "@/app/models/user";

import { connectToDb } from "@/app/services/mongodb";
// import { checkUser } from "@/lib/hashPassword";
// import { cookies } from "next/headers";
// import { jwtDecode } from "jwt-decode";
import jwt from "jsonwebtoken";
export const POST = async (request, response) => {
  const token = request.headers.get("authorization").split(" ").at(1).trim();

  const decodedTokenData = jwt.verify(token, "userToken");

  try {
    await connectToDb();

    const { email, password, todos, name } = await User.findOne({
      email: decodedTokenData.email,
    });

    const jwtToken = jwt.sign(
      {
        email,
        password,
      },
      "userToken"
    );
    return Response.json({
      message: "sucess",
      status: 200,
      data: {
        todos,
        name,
      },
      Authorization: jwtToken,
    });
  } catch (error) {
    return Response.json({
      message: error.message,
      status: 404,
    });
  }
};
