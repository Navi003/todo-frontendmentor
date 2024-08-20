import User from "@/models/user";
import { createToken } from "@/lib/createToken";

import { connectToDb } from "@/db/db";
// import { checkUser } from "@/lib/hashPassword";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

export const POST = async (request, response) => {
  const data = await request.json();

  if (data.email || data.password || data.name) {
    try {
      await connectToDb();

      const foundUser = await User.findOne({
        email: data.email,
      });

      if (foundUser) {
        const match = await checkUser(foundUser, data.password);
        if (match) {
          const { email, _id, name } = foundUser;
          const token = createToken({ email, _id, name });

          const create = (data) => {
            cookies().set({
              name: "token ",
              value: data,
            });
          };

          create(token);

          //   const responseUser = { ...foundUser, password: null };

          return new Response(JSON.stringify({ token, user: foundUser }), {
            status: 200,
            statusText: "Sucess",
          });
        }
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      console.log(error);
      return new Response("Something went wrong", { status: 500 });
    }
  } else {
    try {
      await connectToDb();

      const { email, _id, name } = jwtDecode(data.token);

      const foundUser = await User.findById({
        _id,
      });

      const token = createToken({ email, _id, name });

      return new Response(JSON.stringify({ token, user: foundUser }), {
        status: 200,
        statusText: "Sucess",
      });
    } catch (error) {
      console.log(error);
    }
  }
};
