import { connectToDb } from "@/app/services/mongodb";
import User from "@/app/models/user";

import bcrypt from "bcrypt";
const saltRounds = 10;

export const POST = async (request, response) => {
  //getting data from request Body

  const data = await request.json();

  const { name, email, password } = data.data;

  // bcrypt.genSalt(saltRounds, function (err, salt) {
  //   bcrypt.hash(password, salt, function (err, hash) {
  //     console.log(hash);

  //     hashPassword = hash;
  //   });
  // });

  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(password, salt);
  console.log(hashPassword);

  try {
    await connectToDb();

    const createdUser = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return new Response(JSON.stringify(createdUser), {
      status: 200,
      statusText: "Sucess",
    });
  } catch (error) {
    console.error(error);
    return new Response("Failed to Fetch", { status: 500 });
  }
};
