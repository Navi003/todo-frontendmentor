// import { mongodb } from "@/app/services/mongodb";
// import User from "@/models/user";

export const POST = async (request, response) => {
  //getting data from request Body

  console.log("hello");
  const data = await request.json();
  console.log(data);

  console.log(data);

  //   try {
  //     await connectToDb();

  //     const createdUser = await User.create({
  //       name: data.name,
  //       email: data.email,
  //       password,
  //     });

  //     return new Response(JSON.stringify(createdUser), {
  //       status: 200,
  //       statusText: "Sucess",
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     return new Response("Failed to Fetch", { status: 500 });
  //   }
};
