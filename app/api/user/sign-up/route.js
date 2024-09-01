import { connectToDb } from "@/app/services/mongodb";
import User from "@/app/models/user";

export const POST = async (request, response) => {
  //getting data from request Body

  const data = await request.json();

  const { name, email, password } = data.data;

  try {
    await connectToDb();

    const createdUser = await User.create({
      name,
      email,
      password,
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
